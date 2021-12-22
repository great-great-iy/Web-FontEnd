import React from 'react';
import "../css/ContactContent.css";

function ContactContent() {
    return (
        <div>
            <section className="location">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.3024241109056!2d105.78573631546342!3d20.980510994798387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135accdd8a1ad71%3A0xa2f9b16036648187!2zSOG7jWMgdmnhu4duIEPDtG5nIG5naOG7hyBCxrB1IGNow61uaCB2aeG7hW4gdGjDtG5n!5e0!3m2!1svi!2s!4v1628649155351!5m2!1svi!2s" width="600" height="450" style={{}} allowfullscreen="" loading="lazy"></iframe>            
            </section>
            
            <section className="contact-container">
                <div class="contect-row">
                    <div class="contact-col">
                        <div>
                            <i class="fa fa-home"></i>
                            <span>
                                <h5>Hoc Vien Cong Nghe Buu Chinh Vien Thong</h5>
                                <p>30 Tran Phu, P. Mo Lao, Ha Đong, Ha Noi</p>
                            </span>
                        </div>
                        <div>
                            <i class="fa fa-phone"></i>
                            <span>
                                <h5>+84 0123456789</h5>
                                <p>Monday to Saturday, 7h30AM to 7h30PM</p>
                            </span>
                        </div>
                        <div>
                            <i class="fa fa-envelope-o"></i>
                            <span>
                                <h5>info@....com</h5>
                                <p>30 Tran Phu, P. Mo Lao, Ha Đong, Ha Noi</p>
                            </span>
                        </div>
                    </div>
                    <div class="contact-col">
                        <input type="text" placeholder="Enter your name" required />
                        <input type="email" placeholder="Enter email address" required />
                        <input type="text" placeholder="Enter your subject" required />
                        <textarea rows="8" placeholder="Message"></textarea>
                        <button type="submit" class="hero-btn red-btn">Send Message</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ContactContent;
