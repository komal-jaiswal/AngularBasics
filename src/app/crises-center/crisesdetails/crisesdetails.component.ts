import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { Crises } from '../crises';
import { CrisesService } from '../crises-service';

@Component({
  selector: 'app-crisesdetails',
  templateUrl: './crisesdetails.component.html',
  styleUrls: ['./crisesdetails.component.css']
})
export class CrisesdetailsComponent implements OnInit {

  constructor(private actRoute: ActivatedRoute, private crisisservice: CrisesService,private router:Router) { }
  crise: Crises;
  criseId: number;
  ngOnInit() {
    this.criseId = +this.actRoute.snapshot.paramMap.get('id');
    this.getCrisis();
  }
  getCrisis() {
    this.crise = this.crisisservice.getCrisis(this.criseId);
  }
  back(){
this.router.navigate(['../',{id:this.criseId,foo:'testPara'}],{relativeTo:this.actRoute});
  }
}
