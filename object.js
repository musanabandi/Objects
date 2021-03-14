
//object

/*let student={
Names:"mediatrice",
Age:12,
Address:"Newyrk",
Telephne:"+25070000",
Email:"meddyu15@gmail.com"}
console.log(student);*/

//object in array
/*var List =[

     student={
        Names:"mediatrice",
        Age:12,
        Address:"Newyrk",
        Telephne:"+25070000",
        Email:"meddyu15@gmail.com"},


        student={
            Names:"karisa",
            Age:12,
            Address:"Newyrk",
            Telephne:"+25070000",
            Email:"meddyu15@gmail.com"},


            student={
                Names:"dada",
                Age:12,
                Address:"Newyrk",
                Telephne:"+25070000",
                Email:"meddyu15@gmail.com"},

                student={
                    Names:"butera",
                    Age:12,
                    Address:"Newyrk",
                    Telephne:"+25070000",
                    Email:"meddyu15@gmail.com"}
        

]


console.log(List[0].Names);*/

// array,with object and using forEach;

/*var List =[

    student={
       Names:"mediatrice",
       Age:12,
       Address:"Newyrk",
       Telephne:"+25070000",
       Email:"meddyu15@gmail.com"},


       student={
           Names:"karisa",
           Age:12,
           Address:"Newyrk",
           Telephne:"+25070000",
           Email:"meddyu15@gmail.com"},


           student={
               Names:"dada",
               Age:12,
               Address:"Newyrk",
               Telephne:"+25070000",
               Email:"meddyu15@gmail.com"},

               student={
                   Names:"butera",
                   Age:12,
                   Address:"Newyrk",
                   Telephne:"+25070000",
                   Email:"meddyu15@gmail.com"}
       

]




    List.forEach(Element=>{
        console.log(Element.Names)
        console.log(Element.Age)
    })*/




   
/*let student1 
={
       Names:"mediatrice",
       maths:12,
       bi:25,
    algrithm:20,
    datastructure:35
}

    student2={
        Names:"Damars",
        maths:12,
        bi:25,
     algrithm:20,
     datastructure:35
    }


     student3={
        Names:"Diane",
        maths:12,
        bi:25,
     algrithm:20,
     datastructure:35
     }

     student4={
        Names:"Butera",
        maths:12,
        bi:25,
     algrithm:20,
     datastructure:35
    }


     student5={
        Names:"clever",
        maths:12,
        bi:25,
     algrithm:20,
     datastructure:35,
    }

     function marks(maths,bi,algrithm,datastructure){
         var sum =maths+bi+algrithm+datastructure
         return sum;
     }
     let students=[student1,student2,student3,student4,student5]
       
       

     students.forEach(Element=>{
    console.log(Element.Names)
    console.log(marks(Element.maths,Element.bi,Element.algrithm,Element.datastructure))
                })*/
                

               let articles = [{
                    title: "Children talent development",
                    picture: "imag1.jpg",
                    FirstName: "Mediatrice",
                    content:"Dance competition"
                
                },

                {
                    title: "Day and after school care",
                    picture: "image7.jpg",
                    FirstName: "Thadee",
                    content:"Family charity and service activities "
                
                },

                {
                    title: "Children advocacy and information release",
                    picture: "image3.jpg",
                    FirstName: "Liliane",
                    content:"Youth career fair "
                
                },

                {
                    title: "Special education support",
                    picture: "image4.jpg",
                    FirstName: "Kalisa",
                    content:"Children’s business fair and best achiever’s awards "
                
                },

                {
                    title: "Entertainment and event management",
                    picture: "image5.jpeg",
                    FirstName: "Alphonse",
                    content:"Dance competition"
                
                },
                
                ]
               
                   function renderArticle(){

                    let html = "";

                    articles.forEach(Element=>{
                        console.log(Element)

                        let htmlSegment =`<div class="article">
                        <h1>${Element.title}</h1>
                        <img src="${Element.picture}">

                        <h2>${Element.FirstName}</h2>
                        <p>${Element.content}</p>
                       
                        
                        </div>`

                        html +=htmlSegment;
                        
                                    })

                    let first = document.querySelector('.container')
                    first.innerHTML=html;
                                        
                }
                
                renderArticle();


