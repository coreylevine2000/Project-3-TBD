import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function FooterStrap(props) {
    return (
            <footer>
                &copy; {new Date().getFullYear()} This app was created, and rights are currently held with, <a href=""> PIMP DADDY Oscar Salgado
                </a>, <a href="" target="blank"> THE LADY WITH THE PLAN Laura Antunez</a>, <a href=""
                target="blank">THE LADY, THE MYTH THE LEGEND Molly Grove</a>, <a href="" target="blank">
                </a> &amp; <a href="">He Was Here Too Corey Levine</a>
            </footer>  
    )
}

export default FooterStrap;