import ReviewBox from "./ReviewBox";
import profileCircle from "@/assets/icons/profile-circle.svg";

const reviewOne = {
  avatar: profileCircle,
  name: "Sean H.",
  role: "Equate Financial Manager",
  reviewText:
    "Their team helped us grow our user base significantly. The insights and tools provided were spot on. Great job!",
};
const reviewTwo = {
  avatar: profileCircle,
  name: "Kobi H.",
  role: "Daktel Asia",
  reviewText:
    "HasaMedia transformed our business. They developed a comprehensive software solution tailored to our needs and provided excellent communication throughout the process. Their growth strategies boosted our market presence significantly. I highly recommend them to any business looking to innovate and expand.",
};
const reviewThree = {
  avatar: profileCircle,
  name: "Oded s.",
  role: "Freelance Programmer",
  reviewText:
    "HasaMedia impressed me with their dedication to delivering top-notch results. Their approach to a complex software development project was nothing short of meticulous, ensuring every detail was perfectly aligned with their business goals. Their team’s professionalism and ability to collaborate effectively made the entire process efficient and stress-free. The outcome was a robust, well-integrated solution that clearly reflects their high standards and commitment to excellence.",
};
const reviewFour = {
  avatar: profileCircle,
  name: "Chip B.",
  role: "Manager at Home Expert",
  reviewText:
    "HasaMedia exceeded our expectations by building a stunning, user-friendly websites and implementing a digital marketing strategy that increased our online visibility. The management tools they provided have been invaluable.",
};
const reviewFive = {
  avatar: profileCircle,
  name: "Charlie K.",
  role: "Business Owner",
  reviewText:
    "Partnering with HasaMedia was one of the best decisions for my business. They helped me build an engaging websites that has received fantastic feedback from my customers. The tools and strategies they provided to grow my online presence have resulted in increased traffic and sales. Their support has been instrumental in managing my digital operations smoothly.",
};
const reviewSix = {
  avatar: profileCircle,
  name: "Yosef E.",
  role: "Freelance Designer",
  reviewText:
    "Professionalism and clear vision guided the recent design project, resulting in a beautifully crafted solution that perfectly captured the brand’s essence. The seamless collaboration and dedication to excellence truly stood out.",
};
const reviewSeven = {
  avatar: profileCircle,
  name: "Netanel A.",
  role: "Software Business Owner",
  reviewText:
    "HasaMedia stands out for their exceptional professionalism and commitment to quality. Their recent project, which involved intricate programming and software development, was executed flawlessly, thanks to their clear communication and attention to detail. The end result was a seamless integration of technology that perfectly met their business needs. Working with them was a smooth experience, and their dedication to achieving excellence is evident in the final product.",
};
const reviewEight = {
  avatar: profileCircle,
  name: "Yehonatan Y.",
  role: "Applications Developer",
  reviewText:
    "As an app developer, working with HasaMedia was an absolute pleasure. Their clear communication and detailed feedback made it easy to align the project with their vision. They were organized, professional, and always responsive, which streamlined the entire development process. The collaboration resulted in a well-designed, user-friendly app that exceeded expectations, thanks to their insight and commitment to quality.",
};

const Reviews = () => {
  return (
    <div className="grid auto-rows-min grid-cols-1 gap-16 lg:grid-cols-3">
      <div className="row-one space-y-16">
        <ReviewBox
          avatar={reviewOne.avatar}
          name={reviewOne.name}
          role={reviewOne.role}
          reviewText={reviewOne.reviewText}
        />
        <ReviewBox
          avatar={reviewTwo.avatar}
          name={reviewTwo.name}
          role={reviewTwo.role}
          reviewText={reviewTwo.reviewText}
        />
        <ReviewBox
          avatar={reviewThree.avatar}
          name={reviewThree.name}
          role={reviewThree.role}
          reviewText={reviewThree.reviewText}
        />
      </div>
      <div className="row-two space-y-16">
        <ReviewBox
          avatar={reviewFour.avatar}
          name={reviewFour.name}
          role={reviewFour.role}
          reviewText={reviewFour.reviewText}
        />
        <ReviewBox
          avatar={reviewFive.avatar}
          name={reviewFive.name}
          role={reviewFive.role}
          reviewText={reviewFive.reviewText}
        />
        <ReviewBox
          avatar={reviewSix.avatar}
          name={reviewSix.name}
          role={reviewSix.role}
          reviewText={reviewSix.reviewText}
        />
      </div>
      <div className="row-three space-y-16">
        <ReviewBox
          avatar={reviewSeven.avatar}
          name={reviewSeven.name}
          role={reviewSeven.role}
          reviewText={reviewSeven.reviewText}
        />
        <ReviewBox
          avatar={reviewEight.avatar}
          name={reviewEight.name}
          role={reviewEight.role}
          reviewText={reviewEight.reviewText}
        />
      </div>
    </div>
  );
};

export default Reviews;
