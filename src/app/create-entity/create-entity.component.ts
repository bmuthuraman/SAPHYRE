import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AssociateInvestorModalComponent } from '../associate-investor-modal/associate-investor-modal.component';
import { ModalAboutComponent } from '../modal-about/modal-about.component';

@Component({
  selector: 'app-create-entity',
  templateUrl: './create-entity.component.html',
  styleUrls: ['./create-entity.component.scss']
})
export class CreateEntityComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  invester() {
    const modalRef = this.modalService.open(AssociateInvestorModalComponent, { size: 'lg' });
    modalRef.componentInstance.title = 'Associate Investor';
  }

  dashboard() {
    const modalRef = this.modalService.open(ModalAboutComponent, {size :'xl'});
    modalRef.componentInstance.title = 'Dashboard';
  }

  ngOnInit() {

    //Registered Address
    $(document).ready(function(){
      $(".regadd").click(function(){
       var total_element = $(".regelement").length; 
       var lastid = $(".regelement:last").attr("id");
       var split_id = lastid.split("_");
       var nextindex = Number(split_id[1]) + 1;
       var max = 4;
       if(total_element < max ){
        $(".regelement:last").after("<div class='regelement row' id='regadd_"+ nextindex +"'></div>"); 
        $("#regadd_" + nextindex).append("<div class='col-md-10 col-sm-10 col-10 mt10'><input type='text' class='form-control' placeholder='Address Line "+ nextindex +"' id='txt_"+ nextindex +"'></div><div class='delet mt10'><span id='remove_" + nextindex + "' class='remove glyphicon glyphicon-trash'></span></div>"); 
       } 
      });
      $('.regaddress').on('click','.remove',function(){ 
       var id = this.id;
       var split_id = id.split("_");
       var deleteindex = split_id[1];
       $("#regadd_" + deleteindex).remove();
      }); 
     });

     //Principle Place of Business
     $(document).ready(function(){
      $(".busadd").click(function(){
       var total_element = $(".buselement").length; 
       var lastid = $(".buselement:last").attr("id");
       var split_id = lastid.split("_");
       var nextindex = Number(split_id[1]) + 1;
       var max = 4;
       if(total_element < max ){
        $(".buselement:last").after("<div class='buselement row' id='busadd_"+ nextindex +"'></div>"); 
        $("#busadd_" + nextindex).append("<div class='col-md-10 col-sm-10 col-10 mt10'><input type='text' class='form-control' placeholder='Address Line "+ nextindex +"' id='txt_"+ nextindex +"'></div><div class='delet mt10'><span id='remove_" + nextindex + "' class='remove glyphicon glyphicon-trash'></span></div>"); 
       } 
      });
      $('.busaddress').on('click','.remove',function(){ 
       var id = this.id;
       var split_id = id.split("_");
       var deleteindex = split_id[1];
       $("#busadd_" + deleteindex).remove();
      }); 
     });  
    
  }

}
