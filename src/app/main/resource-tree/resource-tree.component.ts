import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Network } from 'vis-network';
import { TreeRepresentationService } from '../../service';
import { RESOURCE_TYPES } from '../../../libs';

@Component({
  selector: 'app-resource-tree',
  templateUrl: './resource-tree.component.html',
  styleUrls: ['./resource-tree.component.scss'],
})
export class ResourceTreeComponent implements AfterViewInit {
  @ViewChild('networkContainer', { static: false })
  networkContainer!: ElementRef;

  constructor(
    private el: ElementRef,
    private readonly treeService: TreeRepresentationService,
  ) {}

  ngAfterViewInit(): void {
    const nodes: { id: number; label: string; group: string }[] = [];
    const edges: { from: number; to: number }[] = [];

    let nodeId = 1;
    this.treeService.dynamicJson.vnets.forEach(
      (vnet: { resourceName: any; subnets: any[] }, i: any) => {
        const vnetId = nodeId++;
        nodes.push({
          id: vnetId,
          label: vnet.resourceName || RESOURCE_TYPES.VNET,
          group: RESOURCE_TYPES.VNET,
        });

        vnet.subnets.forEach((subnet, j) => {
          const subnetId = nodeId++;
          nodes.push({
            id: subnetId,
            label: subnet.resourceName || RESOURCE_TYPES.SUBNET,
            group: RESOURCE_TYPES.SUBNET,
          });
          edges.push({ from: vnetId, to: subnetId });

          subnet.nics.forEach((nic: { resourceName: any }, k: any) => {
            const nicId = nodeId++;
            nodes.push({
              id: nicId,
              label: nic.resourceName || RESOURCE_TYPES.NIC,
              group: RESOURCE_TYPES.NIC,
            });
            edges.push({ from: subnetId, to: nicId });
          });
        });
      },
    );

    const container = this.el.nativeElement.querySelector('#network');
    const data = { nodes, edges };
    const options = {
      layout: { hierarchical: { direction: 'UD', sortMethod: 'directed' } },
      groups: {
        VNet: { color: { background: 'blue' }, font: { color: 'white' } },
        Subnet: { color: { background: 'green' }, font: { color: 'white' } },
        NIC: { color: { background: 'orange' }, font: { color: 'white' } },
      },
      edges: {
        arrows: { to: true },
        color: '#ccc',
      },
    };

    new Network(container, data, options);
  }
}
