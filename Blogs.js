


function App(){

    return(
        <div className = "second">
            <h1>BLOGS</h1>
            <Card
            
            img = "animation-in-web-design.gif"
            title= "The Role Of Aesthetics In Web Design."
            description ="In this article, Thorlacius states that she uses the concept aesthetics to refer to visual, 
            sound and interactive means of effect; she argues that there is always visual communication 
            in websites, that every element that is included and displayed in the interface of a website 
            communicates something to the user (Thorlacius, 2007, pg.63). The colors, the type of typography
             that a designer uses, and even the placement of elements on a website, communicate something to 
             the user; and it is for this reason that Thorlacius (2007) argues that it important for designer 
             to have knowledge about visual communication. She argues that visual symbols are part our daily 
             lives and that is why it is important for web designers to have knowledge of graphic effects and 
             visual symbols (and semiotics) is crucial for designers,
             for the communication to the users to be intentional (Thorlacius, 2007, pg.63)."
             a = "/blog1.html"
             
            />

            <Card
            img = "internet.gif"
            title= "An Analysis of Internet Art."
            description ="In this artwork I see chaos, there are too many elements added,
            some in 2D and some in 3D, texts are overlapping on top of other texts, challenging the readability and the access to information. The artist used the colors neon pink and
             neon cyan for some texts that are overlapping, and according to a website called approval studio, those colors do not go together, because they are referred to as disturbing 
             and reckless, having multiple neon colors will have them fighting for the user’s attention. 
         Another color according to the article that does not go with neon pink is green, which is also present in the artwork."
         a = "/analysis.html"
            />

            <Card
            img = "onoff.gif"
            title= "A Technical Reflection Of My Creative Process."
            description ="My aim with this website was to make it functional, make sure all the links and all the elements worked,
            I also wanted it to be very simple, not too complex. I went straight ahead and started building the website 
            without a plan, and without wireframes. I then realized that I was having a difficult time trying to figure 
            out the layout of my website, and only then I began wireframing for a few of my web sections."
            a = "/technical.html"
            />

            <Card
            img = "artistic inspo.gif"
            title= "An Artistic Reflection of My Creative Process."
            description ="My aim in designing this website was to use all the tips that Thorlacius gave in the articl
            The Role of Aesthetics in Web Design. I wanted to design with the intention to communicate visually, 
            most of my design decisions were intentional, especially the use of color."
            a = "/artistic.html"
            />
            
            <Card
            img = "animation-in-web-design.gif"
            title= "The Role Of Aesthetics In Web Design."
            description ="In this article, Thorlacius states that she uses the concept aesthetics to refer to visual, 
            sound and interactive means of effect; she argues that there is always visual communication 
            in websites, that every element that is included and displayed in the interface of a website 
            communicates something to the user (Thorlacius, 2007, pg.63). The colors, the type of typography
             that a designer uses, and even the placement of elements on a website, communicate something to 
             the user; and it is for this reason that Thorlacius (2007) argues that it important for designer 
             to have knowledge about visual communication. She argues that visual symbols are part our daily 
             lives and that is why it is important for web designers to have knowledge of graphic effects and 
             visual symbols (and semiotics) is crucial for designers,
             for the communication to the users to be intentional (Thorlacius, 2007, pg.63)."
            />
        </div>
    )
}

function Card(props){
    return(
        <div className ="cards">
           <div className="card-container" >
                <div className = "card">
               <img src ={props.img}/>
                <h2 className="card-title">{props.title}</h2>
                <p className="card-description">{props.description}</p>
               <a className= "card-button" href={props.a}>View Full Blog</a>
                </div>
                
            </div> 
   
        </div>
    )
}







ReactDOM.render(<App/>, document.getElementById('root'));