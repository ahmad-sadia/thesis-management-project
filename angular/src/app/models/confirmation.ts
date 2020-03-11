export class Confirmation
{
    confirmed:number;
    studentId:number;
    supervisorId:number;
    projectPlanId:number;
    id:number;

    constructor(object = null)
    {
        if(object!=null)
        {
            this.formObject(object);
        }
    }
    private formObject(object)
    {
        this.confirmed = object.confirmed;
        this.id = object.id;
        this.projectPlanId = object.projectPlanId;
        this.studentId = object.studentId;
        this.supervisorId = object.supervisorId;
    }
}