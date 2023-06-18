import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <p>
                        A single-page application SPA is a Web app that is presented to the user through
                        a single HTML page to be more responsive and to more closely replicate a desktop
                        application or a native app. An SPA is sometimes referred to as a single-page interface .                        
                    </p>
                    <Link className="btn btn-dark" to="/users">Users</Link>
                    <Link className="btn btn-light ms-3" to="/posts">Posts</Link>
                </div>
            </div>
        </div >
    )
}

export default Home;