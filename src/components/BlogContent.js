import React from 'react';
import "../css/BlogContent.css"


function BlogContent() {
    return (
        <div className="blog-container">
            <div class="blog-row">
                <div class="blog-left">
                    <img src="images/certificate.jpg" alt="Certificate"/>
                    <h2>Our Certificate & Online Programs For 2021</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero corporis veritatis modi, facere, officiis molestias labore temporibus natus doloremque corrupti incidunt fuga vitae itaque consequuntur at rerum dolor hic velit?</p>
                    <br/>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima aut quaerat dicta a eaque, quidem tempora, repudiandae libero totam facilis error architecto quam adipisci corrupti tenetur, harum enim blanditiis nihil.</p>
                    <br/>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro incidunt cumque, placeat molestiae nulla quo, quisquam soluta maxime commodi, iste nesciunt ea recusandae quis saepe ipsa facilis vero hic eius?</p>
                        <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque et, iure numquam optio porro dignissimos repellat magni saepe adipisci officiis rerum, beatae reprehenderit doloremque enim voluptatum dolorum, accusamus quo placeat.</p>
                    
                    <div class="comment-box">

                        <h3>Leave a comment</h3>

                        <form class="comment-form">
                            <input type="text" placeholder="Enter Name"/>
                            <input type="email" placeholder="Enter Email"/>
                            <textarea rows="5" placeholder="Your comment"></textarea>
                            <button type="submit" class="hero-btn red-btn">Post Comment</button>
                        </form>
                    </div>
                </div>
                <div class="blog-right">
                    <h3>Post Categories</h3>
                    <div>
                        <span>Business Analytics</span>
                        <span>21</span>
                    </div>
                    <div>
                        <span>Data Science</span>
                        <span>28</span>
                    </div>
                    <div>
                        <span>Machine learning</span>
                        <span>15</span>
                    </div>
                    <div>
                        <span>Computer Science </span>
                        <span>34</span>
                    </div>
                </div>  
            </div>
        </div>
    );
}

export default BlogContent;
