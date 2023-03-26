import { Component, Input} from '@angular/core';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignment } from '../assignments.model';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent {
@Input() assignmentTransmis?:Assignment;

constructor(private assignmentsService:AssignmentsService){

}
onAssignmentRendu(){
  if(this.assignmentTransmis){
    this.assignmentTransmis.rendu=true;
    this.assignmentsService.updateAssignment(this.assignmentTransmis).subscribe(message=>{
      console.log("message")
    })
  }
}
onDelete(){
  if(this.assignmentTransmis){
    this.assignmentsService.deleteAssignment(this.assignmentTransmis).subscribe(message=>{
      console.log(message);
    }
    )
  }

this.assignmentTransmis=undefined;
}
}
