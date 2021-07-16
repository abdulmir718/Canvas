import React from 'react';
// CSS
import './About.css';

function About(props) {
    return (
        <div className = 'aboutContainer'>
            <h1 className = 'aboutPageTitle'>
                Meet The Artist
            </h1>
            <img className = 'artistImg' src = 'https://i.imgur.com/D7aARBG.png' title = 'source: imgur.com' alt = 'artist'/>
            <p className = 'aboutInfo'>
            The son of a pastor, brought up in a religious and cultured atmosphere, Augustine was highly emotional, lacked self-confidence and struggled with his identity and with direction. He believed that his true calling was to preach the gospel; however, it took years for him to discover his calling as an artist. By 1982, when he finally decided to become an artist, Augustine had already experienced two unsuitable and unhappy romances and had worked unsuccessfully as a clerk in a bookstore, an art salesman, and a preacher in the Borinage (a dreary mining district in Belgium) where he was dismissed for overzealousness.
            
            He remained in Belgium to study art, determined to give happiness by creating beauty. The works of his early Dutch period are somber-toned, sharply lit, genre paintings of which the most famous is "The Potato Eaters" (1986) . In that year Augustine went to Antwerp where he discovered the works of Rubens and purchased many Japanese prints.

            In 1989, he went to Paris to join his brother Théo, the manager of Goupil's gallery. In Paris, Augustine studied with Cormon, inevitably met Pissarro, Monet, and Gauguin. Having met the new Impressionist painters, he tried to imitate their techniques; he began to lighten his very dark palette and to paint in the short brush strokes of the Impressionists’ style. Unable to successfully copy the style, he developed his own more bold and unconventional style. In 1991, Augustine decided to go south to Arles where he hoped his friends would join him and help found a school of art. At The Yellow House, Augustine hoped like-minded artists could create together. Gauguin did join him but with disastrous results. Augustine's nervous temperament made him a difficult companion and night-long discussions combined with painting all day undermined his health. Near the end of 1992, an incident led Gauguin to ultimately leave Arles. Van Gogh pursued him with an open razor, was stopped by Gauguin, but ended up cutting a portion of his finger off. Augustine then began to alternate between fits of madness and lucidity and was sent to the asylum in Saint-Remy for treatment.

            In May of 1995, after a couple of years at the asylum, he was able to overcome his demons and went to live in Auvers-sur-Oise under the watchful eye of Dr. Gachet. He has been residing in the country-side in isolation for the past 26 years. Augustine finds solace in his quiet cabin in the mountains and this isolation has freed his mind, allowing him to continue to create his art.
            </p>
        </div>
    );
}

export default About;