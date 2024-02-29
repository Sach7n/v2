import "./Sidebar.css"

const Sidebar = () => {
    return (
        <>
            <div id='a' className='main_side_div' > 
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                    <div className="icon-bar"> 
                    <a href={'mailto:sachin.macwan94@gmail.com'} className="envelope"><i className="fa fa-envelope"></i></a> 
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sachin-macwan-727352163/" className="linkedin"><i className="fa fa-linkedin"></i></a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/Sach7n" className="github"><i className="fa fa-github"></i></a> 
                    
                    </div>
            
            </div>

        </>
    );
};

export default Sidebar;

