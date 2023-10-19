import { TODOLIST2 } from "./adatok.js";
import Megjelenit from "./Megjelenit.js";
$(function () {
    const szuloELEM = $(".tarolo");
    new Megjelenit(TODOLIST2, szuloELEM);

   /*  $(window).on("torles", (event) => {
       // console.log(event.detail);
    }); */
    $(window).on("kesz",(event)=>{
        let objPeldany = event.detail
        //console.log(event.detail)
        objPeldany.setHatterszin()
        objPeldany.setTorloGomb()
        TODOLIST2[objPeldany.index].kesz=true;
        console.log(TODOLIST2)
    })
    $(window).on("torles",(event)=>{
        let objPeldany = event.detail
        let sorPeldany = event.detail
        console.log(event.detail)
        TODOLIST2.splice(objPeldany.index,1)
        sorPeldany.setTorolElem()
        console.log(TODOLIST2)
         
    }) 
});
