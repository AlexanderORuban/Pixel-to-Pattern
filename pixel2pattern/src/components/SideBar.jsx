
import { Card, CardContent, Typography, Link } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
export default function SideBar() {

    const crochetGuides = [ 
        { 
            name: 'Quick Start Guide', link: 'https://www.instructables.com/Beginning-crochet/'
        },
        { name: 'Learn to Crochet - TL Yarn Crafts (45 mins)', link: 'https://www.youtube.com/watch?v=zzWX2dx8ufc'},
        { name: 'How to Read Crochet Patterns', link: 'https://www.craftyarncouncil.com/standards/how-to-read-crochet-pattern'},
        { name: "Beginner's Guide to Tapestry Crochet", link: 'https://devouthand.com/en-us/blogs/blog/tapestry-crochet-a-beginners-guide?srsltid=AfmBOorpp-WXdD5eyIbl2pHYzXtCel8jmatqKR0OjN8v5FG0AepU9n62'},
        { name: 'Quick Color Changing (1 min)', link: "https://www.youtube.com/watch?v=YTZpaLROlCA"},
        { name: 'Weaving in Ends', link: 'https://thecrochetproject.com/blogs/blog-the-crochet-project/how-to-weave-in-your-yarn-ends'},
        { name: 'Finishing/Blocking Your Project', link: 'https://www.crochet.com/learning-center/how-to-block-crochet?srsltid=AfmBOoqqT2q3JAu3rc01dpZrve3seJJ7V3tedM5nvjfGd1EQ1KB3duhm'},
        { name: 'Yarn and Pattern Forum - Ravelry', link: 'https://www.ravelry.com'},
        { name: 'More Tutorials - TL Yarn Crafts', link: 'https://tlycblog.com/tutorials/'}
    ];

    const designGuides = [
        { name: 'Choosing Colors For Your Project', link: 'https://www.yarncrafted.com/blog/10-tips-for-choosing-yarn-colors-for-your-crochet-project'},
        { name: 'Color Palette Generator', link: 'https://coolors.co/generate'},
        { name: 'Picking High Contrast Colors', link: 'https://thecrochetproject.com/blogs/blog-the-crochet-project/how-to-pick-two-high-contrast-colours?srsltid=AfmBOorlUI4WkyN_AFsTEFqCnYQsgCG2UjurctLPMuQeq52TytJDn_og'},

    ];
    
    return(
        <Card  sx={{ padding: 2}}>
            <Typography variant="h6" textAlign='center'>Tutorials & Links</Typography>
            <CardContent>
                <Typography sx={{fontWeight: 'bold'}} textAlign='center'>Crochet</Typography>
                <ul style={{margin: '1em'}}>
                    {crochetGuides.map((guide, index) => (
                        <li key={index} style={{ marginBottom: '1em' }}>
                            <Link href={guide.link} underline="hover" target="_blank" rel="noopener">{guide.name}</Link>
                        </li>
                    ))}
                </ul>
                <Typography sx={{ fontWeight: 'bold' }} textAlign='center'>Design</Typography>
                <ul style={{ margin: '1em' }}>
                    {designGuides.map((guide, index) => (
                        <li key={index} style={{ marginBottom: '1em' }}>
                            <Link href={guide.link} underline="hover" target="_blank" rel="noopener">{guide.name}</Link>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    )
}