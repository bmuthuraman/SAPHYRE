import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-associate-investor-modal',
  templateUrl: './associate-investor-modal.component.html',
  styleUrls: ['./associate-investor-modal.component.scss']
})
export class AssociateInvestorModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    //checkbox start
    $('[name="checkbox"]').click( function(){     
      if ($(this).prop('checked')) {
        $(this).closest('tr').addClass('trcurrent');
      } else {
        $(this).closest('tr').removeClass('trcurrent');
      }
    });
    //checkbox end

  }

}
