export interface Tag {
  key: string;
  value: string;
}

export interface NIC {
  resourceName: string;
  resourceType: string;
  tags: Tag[];
}

export interface Subnet {
  resourceName: string;
  resourceType: string;
  tags: Tag[];
  nics: NIC[];
}

export interface VNet {
  resourceName: string;
  resourceType: string;
  tags: Tag[];
  subnets: Subnet[];
}

export interface ResourceTypes {
  VNET: string;
  SUBNET: string;
  NIC: string;
}
