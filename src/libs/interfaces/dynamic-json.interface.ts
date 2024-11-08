export interface NIC {
  resourceName: string;
  resourceType: string;
}

export interface Subnet {
  resourceName: string;
  resourceType: string;
  nics: NIC[];
}

export interface VNet {
  resourceName: string;
  resourceType: string;
  subnets: Subnet[];
  tags?: any;
}

export interface ResourceData {
  vnets: VNet[];
}
