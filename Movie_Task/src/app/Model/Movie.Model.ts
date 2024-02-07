class Movie 
{
    id:number;
    name:string;
    year:number;
    description:string;
    image:string;
    watched:boolean;

    constructor(id:number=0,name:string="",year:number=0,description:string="",image:string="",watched:boolean=false)
    {
        this.id=id;
        this.name= name;
        this.year=year;
        this.description=description;
        this.image=image;
        this.watched=watched;     
    }
}

export default Movie