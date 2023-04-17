import './Footer.css'
import '../App.css'
function Footer(){
    return(
        <section className='footer-section'>
            <form action="">
                <label>Get daily jokes sent to your email</label> <br />
                <input type="email" name="" id="" placeholder="Your email address"/>
                <br />
                <button className="bg-red-500 hover:bg-blue-700 text-white font-bold my-20 py-2 px-4 rounded">SUBMIT</button>
                
            </form>
            
            <p>Made by <a href=""> Cindy Kandie</a></p>
            <p>Subscribe to the <a href="https://cindykandie.hashnode.dev" target="_blank">developer blog</a> </p>
            <ul>
            <li title='GitHub'>
                <a href="https://github.com/cindykandie/jokes-simulator" target="_blank">
                    <img src="/assets/github.svg" alt="GitHub Repo" />
                </a>
            </li>
            <li title='Inspo'>
                <a href="https://www.awwwards.com/inspiration/the-dad-jokes-a-small-studio" target="_blank">
                    <img src="/assets/figma.svg" alt="Inspo" />
                </a>
            </li>
            <li title='Portfolio'>
                <a href="https://cindykandie.github.io/portfolio" target="_blank">
                    <img src="/assets/tool.svg" alt="Portfolio" />
                </a>
            </li>
            
            </ul>
        </section>
    )
}
export default Footer