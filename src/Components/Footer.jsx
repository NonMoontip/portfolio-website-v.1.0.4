import React from 'react'
import "../Style/Footer.css"

export default function Footer() {
    return (
        <div className="footer" id='contact'>
            <div className="footer-in">
                <div className="foot-text">
                    <div className="text-set">
                        <h1>Contact</h1>
                        <p><i class="fi fi-rr-envelope"></i> opor-2543@hotmail.com</p>
                        <p><i class="fi fi-rr-phone-call"></i> +66 83 473 3036</p>
                        <p><i class="fi fi-rr-marker"></i>12/79 Moo. 1 , Klongsong , Klongluang , Pathumthani 12120</p>
                    </div>
                    <div className="social">
                        <i class="fi fi-brands-facebook"><a href=""></a></i>
                        <i class="fi fi-brands-instagram"><a href=""></a></i>
                        <i class="fi fi-brands-linkedin"><a href=""></a></i>
                        <i class="fi fi-brands-line"><a href=""></a></i>
                    </div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.1529896578686!2d100.64067321475207!3d14.00894129018146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d7fb5f274c447%3A0xce5a64ab9911c24c!2z4Lir4Lih4Li54LmI4Lia4LmJ4Liy4LiZ4Lie4Lik4LiB4Lip4Liy4Lin4Li04Lil4LmA4Lil4LiIMTIg4LiV4Liz4Lia4LilIOC4hOC4peC4reC4h-C4quC4reC4hyDguK3guLPguYDguKDguK3guITguKXguK3guIfguKvguKXguKfguIcg4Lib4LiX4Li44Lih4LiY4Liy4LiZ4Li1IDEyMTIw!5e0!3m2!1sth!2sth!4v1652667526818!5m2!1sth!2sth" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
            </div>
        </div>
    )
}
