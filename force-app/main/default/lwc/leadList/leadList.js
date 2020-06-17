import { LightningElement, track } from 'lwc';

export default class LeadList extends (LightningElement) {
 @track leads = [];
 @track searchTerm;

 handleSearchTermChange(event){
   this.searchTerm = event.target.value;
   const selectEvent = new CustomerEvent('newsearch', {detail: this.searchTem});
   this.dispatchEvent(selectEvent);

 }


 leads = [
     {
         "Id": "LeadRedf1",
         "Name": "Bertha Boxer",
         "Title": "Director of Vendor Relationships",
         "Company": "Farmers Coop. of Florida",
         "Street": " 321 Westcott Building",
         "City": "Tallahassee",
         "State": "FL",
         "PostalCode": "32306" 
     },


     {
        "Id": "LeadRedf2",
        "Name": "Phyllis Cotton",    
        "Title": "CFO",
        "Company": "Chamber of Commerce",
        "Street": "300 E Park Ave",
        "City": "Tallahassee",
        "State": "FL",
        "PostalCode": "32301", 
    },


  {
         "Id": "LeadRedf1",
         "Name": "Bertha Boxer",
         "Title":" SVP, Procurement",
         "Company": "Tallahessee",
         "Street": "500 South Drive",
         "City": "Tallahassee",
         "State":" FL",
         "PostalCode": "33340"
 },





    ]





}