
import React, { Component } from 'react'
import classes from "./Articles.module.css"
export default class Articles extends Component {
   
    compteur = {
        i: 0,
        
      
    }
    state = {
        Display: '',
        showElem : true
    }
    bomber(e) {
              
        this.setState((prev) => {
            return {
                showElem: false,
                ...prev
            }
        })
    }
    displayHandler() {
        this.setState((prev) => {
            let esteban = this.compteur.i
            return {
                Display: <div>{prev.Display} {this.state.showElem === true && <p> Produit : {this.props.objet.articles[this.compteur.i].nom} || Unités : {this.props.objet.articles[this.compteur.i].stock} <button  onClick={this.bomber.bind(this)}>Rendre</button></p>} </div>
            }
        })
        this.props.objet.articles[this.compteur.i].stock--;
        this.props.objet.argent = (this.props.objet.argent -this.props.objet.articles[this.compteur.i].prix).toFixed(2)
    //   gringo =  componentDidUpdate(arg){
           
        
    //             }
    }
    render() {
        let sol = this.props.objet.articles;
        return (
            <React.Fragment>
                { this.props.objet.argent > 0?<h1> Argent de poche :{ this.props.objet.argent}</h1> : <h1>Tu es endetté jusqu'au cou</h1>}
            <div className={classes.classy}>
                <div style ={sol[0].stock === 0 ? {height : "32rem" ,color : "white"} : {height: "35rem"}} className={ (sol[0].stock === 0 && `${classes.sizer} ${classes.classyzero}`) || (sol[0].stock === 1 && `${classes.sizer} ${classes.classyun}`) || classes.sizer}>
                    <img src={require("../images/ananas.jpg").default} className={classes.imagerie} alt=""></img>
                    <div >
                        <h4>{this.props.objet.articles[0].nom}</h4>
                        {<p>Prix :{this.props.objet.articles[0].prix}</p>}
                        {sol[0].stock !== 0 ? <p>Stock :{this.props.objet.articles[0].stock}</p> : <p>Rupture de Stock</p>}
                        {sol[0].stock !== 0 &&  this.props.objet.argent > 0 &&<button onClick={() => {
                            this.compteur.i = 0
                            this.displayHandler()
                        }}>Acheter</button>}
                    </div>
                </div>





                <div  style ={sol[1].stock === 0 ? {height : "32rem" ,color : "white" } : {height: "35rem"}}  className={(sol[1].stock === 0 && `${classes.sizer} ${classes.classyzero} `) || (sol[1].stock === 1 && `${classes.sizer} ${classes.classyun}`) || classes.sizer}>
                    <img src={require("../images/fraise.jpg").default} className={classes.imagerie} alt=""></img>
                    <div>
                        <h4>{this.props.objet.articles[1].nom}</h4>
                        <p>Prix :{this.props.objet.articles[1].prix}</p>
                        {sol[1].stock !== 0 ?<p>Stock :{this.props.objet.articles[1].stock}</p>:<p>Rupture de Stock</p>}
                        {sol[1].stock !== 0 &&  this.props.objet.argent > 0 && <button onClick={() => {
                            this.compteur.i = 1
                            this.displayHandler()
                        }}>Acheter</button>}
                    </div>
                </div>
            </div>
            <div>
                        {this.state.Display}
            </div>
                

                </React.Fragment>
        )
    }
}


































// export default class Articles extends Component {
//     state = {
//         Display: null,
//         classyun: false,
//         classyzero: false,
        
//     }
//     compteur = {
//         i: 0,
        
//     }
//     stateHandler() {
//         this.setState((prev)=>  {
//             return { Display : <div>{prev.Display} <p> Produit : { this.props.objet.articles[this.compteur.i].nom} || Unités : {this.props.objet.articles[this.compteur.i].stock} </p></div> }
//         })
//         this.props.objet.articles[this.compteur.i].stock--
//         if (this.props.objet.articles[this.compteur.i].stock === 1) {
//             this.setState((prev)=> {return {  classyun: `${this.compteur.i}${prev.classyun}` }})
           
//         } else if (this.props.objet.articles[this.compteur.i].stock === 0) {
//             this.setState((prev)=> {return {  classyun: `${this.compteur.i}${prev.classyun}` }})
//         }
        
       
//     }
   
//     render() {
        
//         return (
//             // this.state.classyun?`${styles.sizer} ${styles.classyun}`:`${styles.sizer}` 
//             <React.Fragment>
//             <div className = {styles.classy}>
//                 <div className = {(this.state.classyzero.includes(0) && `${styles.classyzero} ${styles.sizer}`) || (this.state.classyun.includes(0) && `${styles.classyun} ${styles.sizer}` ) || ` ${styles.sizer}`} >
//                     <img className={styles.imagerie} src={require("../images/ananas.jpg").default} alt="Ananas"></img>
//                 <div>
//                         <p>{ this.props.objet.articles[0].nom}</p>
//                         <span>{ this.props.objet.articles[0].prix} euros</span>
//                         <p>Stock: { this.props.objet.articles[0].stock} unités</p>
//                             <button onClick={() => {
//                                 this.compteur.i = 0;
//                                 this.stateHandler()
//                             }}
//                         >Acheter</button>     
//                 </div>
//                 </div>



//                 <div className = {(this.state.classyzero.includes(1) && `${styles.classyzero} ${styles.sizer}`) || (this.state.classyun.includes(1) && `${styles.classyun} ${styles.sizer}` ) || ` ${styles.sizer}`}>
                    
//                         <img className={styles.imagerie} src={require("../images/fraise.jpg").default} alt="Fraise"></img>
//                         <div>
//                         <p>{ this.props.objet.articles[1].nom}</p>
//                         <span>{ this.props.objet.articles[1].prix} euros</span>
//                         <p>Stock: { this.props.objet.articles[1].stock} unités</p>
//                             <button onClick={() => {
//                                 this.compteur.i = 1;
//                                 this.stateHandler()
//                             }}
//                         >Acheter</button>     
//                         </div>
//                 </div>



//                 <div className = {(this.state.classyzero.includes(2) && `${styles.classyzero} ${styles.sizer}`) || (this.state.classyun.includes(2) && `${styles.classyun} ${styles.sizer}` ) || ` ${styles.sizer}`}>
//                         <img className={styles.imagerie} src={require("../images/guoyave.jpg").default} alt="Guoyave"></img>
//                         <div>
//                         <p>{ this.props.objet.articles[2].nom}</p>
//                         <span>{ this.props.objet.articles[2].prix} euros</span>
//                         <p>Stock: { this.props.objet.articles[2].stock} unités</p>
//                             <button onClick={() => {
//                                 this.compteur.i = 2;
//                                 this.stateHandler()
//                             }}
//                         >Acheter</button>     
//                         </div>
//             </div>
//             </div>
                



//             <div>
//                     <h4>Mon Panier:</h4>
//                     {this.state.Display}

//             </div>
//                 </React.Fragment>
//         )
//     }
// }
