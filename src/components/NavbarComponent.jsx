export default function NavBar(props){
    let trigger;
    return (
        <header className='app-header'>
            <div className="header-left">
                <h1 className="header-title bigText">{props.title}</h1>
                <p className="minText">Total Followers : 23,004</p>
            </div>
            <div className="header-right">
                <span className='darkMode minText text-dmode'>Dark Mode</span>
                <label className="switch">
                    <input type="checkbox"></input>
                    <span className="slider round" id='trigger' 
                    onClick={
                        () => {
                            if(trigger || document.body.classList.contains('light-theme')){
                                document.body.classList.add('dark-theme')
                                document.body.classList.remove('light-theme')

                                trigger = false;
                            }else{
                                document.body.classList.remove('dark-theme')
                                document.body.classList.add('light-theme')
                                trigger = true;
                            }
                        }
                    }></span>
                </label>
            </div>
        </header>
    )
}