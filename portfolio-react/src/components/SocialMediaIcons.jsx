import linkedIcon from "../assets/linkedin.png";
import twitterIcon from "../assets/twitter.png";
import facebookIcon from "../assets/facebook.png";
import instagramIcon from "../assets/instagram.png";

const SocialMediaIcons = () => {
  const content = [
    ["https://www.linkedin.com", "linkedin-link", linkedIcon],
    ["https://www.twitter.com", "twitter-link", twitterIcon],
    ["https://www.facebook.com", "facebook-link", facebookIcon],
    ["https://www.instagram.com", "instagram-link", instagramIcon],
  ];

  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      {content.map((el, i) => {
        return (
          <a className="hover:opacity-50 transition duration-500" href={el[0]} target="_blank" rel="noreferrer" key={i}>
            <img alt={`${el[1]}`} src={el[2]} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialMediaIcons;
