import React from 'react';
import '../css/Fallback.css'

export default function Fallback(){
    return(
        <section class="testimonials">
            <h1>What Our Student Says</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

            <div class="row mt-3 d-flex">
                <div class="testimonials-col">
                    <img src="../images/user1.jpg" alt=''/>
                    <div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, officiis omnis? Aut, incidunt eveniet. Minima quis aut id repellendus, cumque saepe suscipit, nam aliquid animi voluptates ipsa sed repellat sit!</p>
                        <h3>Christine Berley</h3>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
                <div class="testimonials-col">
                    <img src="../images/user2.jpg" alt=''/>
                    <div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, officiis omnis? Aut, incidunt eveniet. Minima quis aut id repellendus, cumque saepe suscipit, nam aliquid animi voluptates ipsa sed repellat sit!</p>
                        <h3>Christine Berley</h3>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                </div>
            </div>
        </section>     
    );
}