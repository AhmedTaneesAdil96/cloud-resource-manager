import { Injectable } from '@angular/core';
import { ResourceData } from '../../libs/interfaces/dynamic-json.interface';

@Injectable({
  providedIn: 'root',
})
export class TreeRepresentationService {
  dynamicJson: ResourceData = { vnets: [] };
}
