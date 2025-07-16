import { FaLongArrowAltRight } from "react-icons/fa";

export const HeroSection = () =>{
    return(
        <main className="hero-section main">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <h1 className="heading-xl">
                        Explore the world,One Country at a time.
                    </h1>
                    <p className="paragraph">
                        Discover the history,culture,and beauty of every nation.
                        search,and filter through countries to find the detailed you need

                    </p>
                    <button className="btn btn-darken btn-inline bg-while-box">
                        start Exploring <FaLongArrowAltRight/>

                    </button>
                </div>
                <div className="hero-image">
                    <img
                    src="/public/imags/unsplash.jpg"
                    alt="world is beauty"
                    className="banner-image"
                    />
                    

                </div>
            </div>
        </main>
    )
}