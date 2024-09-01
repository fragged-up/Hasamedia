import ReviewBox from "./ReviewBox";

const reviewOne = {
  avatar:
    "https://2.img-dpreview.com/files/p/TS940x940~forums/63132016/59fc3e30c26c4b6db8b42afbb25d149f",
  name: "Sean H.",
  role: "Software Business Owner",
  reviewText:
    "Their team helped us grow our user base significantly. The insights and tools provided were spot on. Great job!",
};
const reviewTwo = {
  avatar:
    "https://4.img-dpreview.com/files/p/TS940x940~forums/63132016/8685e5c2950d41169412d655776f2095",
  name: "Kobi H.",
  role: "Daktel Asia Chair man",
  reviewText:
    "HasaMedia transformed our business. They developed a comprehensive software solution tailored to our needs and provided excellent communication throughout the process. Their growth strategies boosted our market presence significantly. I highly recommend them to any business looking to innovate and expand.",
};
const reviewThree = {
  avatar:
    "https://4.img-dpreview.com/files/p/TS940x940~forums/63132016/8685e5c2950d41169412d655776f2095",
  name: "Oded s.",
  role: "Owner of Coded Solutions",
  reviewText:
    "HasaMedia impressed me with their dedication to delivering top-notch results. Their approach to a complex software development project was nothing short of meticulous, ensuring every detail was perfectly aligned with their business goals. Their team’s professionalism and ability to collaborate effectively made the entire process efficient and stress-free. The outcome was a robust, well-integrated solution that clearly reflects their high standards and commitment to excellence.",
};
const reviewFour = {
  avatar:
    "https://4.img-dpreview.com/files/p/TS940x940~forums/63132016/f173f8d56da9479fbe3581f2b2a5ac4b",
  name: "Chip B.",
  role: "Manager of Home Expert",
  reviewText:
    "HasaMedia exceeded our expectations by building a stunning, user-friendly websites and implementing a digital marketing strategy that increased our online visibility. The management tools they provided have been invaluable.",
};
const reviewFive = {
  avatar:
    "https://4.img-dpreview.com/files/p/TS940x940~forums/63132016/8685e5c2950d41169412d655776f2095",
  name: "Charlie K.",
  role: "CEO of Budget Van Lines",
  reviewText:
    "Partnering with HasaMedia was one of the best decisions for my business. They helped me build an engaging websites that has received fantastic feedback from my customers. The tools and strategies they provided to grow my online presence have resulted in increased traffic and sales. Their support has been instrumental in managing my digital operations smoothly.",
};
const reviewSix = {
  avatar:
    "https://4.img-dpreview.com/files/p/TS940x940~forums/63132016/8685e5c2950d41169412d655776f2095",
  name: "Yosef E.",
  role: "Freelance Designer",
  reviewText:
    "Professionalism and clear vision guided the recent design project, resulting in a beautifully crafted solution that perfectly captured the brand’s essence. The seamless collaboration and dedication to excellence truly stood out.",
};
const reviewSeven = {
  avatar:
    "https://1.img-dpreview.com/files/p/TS940x940~forums/63132016/2a1e59e12f4543bea10f2385259c81cf",
  name: "Netanel A.",
  role: "Software Business Owner",
  reviewText:
    "HasaMedia stands out for their exceptional professionalism and commitment to quality. Their recent project, which involved intricate programming and software development, was executed flawlessly, thanks to their clear communication and attention to detail. The end result was a seamless integration of technology that perfectly met their business needs. Working with them was a smooth experience, and their dedication to achieving excellence is evident in the final product.",
};
const reviewEight = {
  avatar:
    "https://4.img-dpreview.com/files/p/TS940x940~forums/63132016/8685e5c2950d41169412d655776f2095",
  name: "Liron P.",
  role: "Singer and Songwrite",
  reviewText:
    "With outstanding communication and a strong focus on professionalism, the video and audio project came together seamlessly, resulting in a final product that truly captured my essence. The collaboration was smooth, and the attention to detail was evident in the quality of the work.",
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

// const reviews: ReviewBoxProps[] = [
//   {
//     avatar:
//       "https://2.img-dpreview.com/files/p/TS940x940~forums/63132016/59fc3e30c26c4b6db8b42afbb25d149f",
//     name: "Sean H.",
//     role: "Software Business Owner",
//     reviewText:
//       "Their team helped us grow our user base significantly. The insights and tools provided were spot on. Great job!",
//   },
//   {
//     avatar:
//       "https://4.img-dpreview.com/files/p/TS940x940~forums/63132016/f173f8d56da9479fbe3581f2b2a5ac4b",
//     name: "Chip B.",
//     role: "Manager of Home Expert",
//     reviewText:
//       "HasaMedia exceeded our expectations by building a stunning, user-friendly websites and implementing a digital marketing strategy that increased our online visibility. The management tools they provided have been invaluable.",
//   },

//   {
//     avatar:
//       "https://1.img-dpreview.com/files/p/TS940x940~forums/63132016/2a1e59e12f4543bea10f2385259c81cf",
//     name: "Netanel A.",
//     role: "Software Business Owner",
//     reviewText:
//       "HasaMedia stands out for their exceptional professionalism and commitment to quality. Their recent project, which involved intricate programming and software development, was executed flawlessly, thanks to their clear communication and attention to detail. The end result was a seamless integration of technology that perfectly met their business needs. Working with them was a smooth experience, and their dedication to achieving excellence is evident in the final product.",
//   },
//   {
//     avatar:
//       "https://4.img-dpreview.com/files/p/TS940x940~forums/63132016/8685e5c2950d41169412d655776f2095",
//     name: "Kobi H.",
//     role: "Daktel Asia Chair man",
//     reviewText:
//       "HasaMedia transformed our business. They developed a comprehensive software solution tailored to our needs and provided excellent communication throughout the process. Their growth strategies boosted our market presence significantly. I highly recommend them to any business looking to innovate and expand.",
//   },
//   {
//     avatar:
//       "https://4.img-dpreview.com/files/p/TS940x940~forums/63132016/8685e5c2950d41169412d655776f2095",
//     name: "Charlie K.",
//     role: "CEO of Budget Van Lines",
//     reviewText:
//       "Partnering with HasaMedia was one of the best decisions for my business. They helped me build an engaging websites that has received fantastic feedback from my customers. The tools and strategies they provided to grow my online presence have resulted in increased traffic and sales. Their support has been instrumental in managing my digital operations smoothly.",
//   },
//   {
//     avatar:
//       "https://4.img-dpreview.com/files/p/TS940x940~forums/63132016/8685e5c2950d41169412d655776f2095",
//     name: "Liron P.",
//     role: "Singer and Songwrite",
//     reviewText:
//       "With outstanding communication and a strong focus on professionalism, the video and audio project came together seamlessly, resulting in a final product that truly captured my essence. The collaboration was smooth, and the attention to detail was evident in the quality of the work.",
//   },
//   {
//     avatar:
//       "https://4.img-dpreview.com/files/p/TS940x940~forums/63132016/8685e5c2950d41169412d655776f2095",
//     name: "Oded s.",
//     role: "Owner of Coded Solutions",
//     reviewText:
//       "HasaMedia impressed me with their dedication to delivering top-notch results. Their approach to a complex software development project was nothing short of meticulous, ensuring every detail was perfectly aligned with their business goals. Their team’s professionalism and ability to collaborate effectively made the entire process efficient and stress-free. The outcome was a robust, well-integrated solution that clearly reflects their high standards and commitment to excellence.",
//   },
//   {
//     avatar:
//       "https://4.img-dpreview.com/files/p/TS940x940~forums/63132016/8685e5c2950d41169412d655776f2095",
//     name: "Yosef E.",
//     role: "Freelance Designer",
//     reviewText:
//       "Professionalism and clear vision guided the recent design project, resulting in a beautifully crafted solution that perfectly captured the brand’s essence. The seamless collaboration and dedication to excellence truly stood out.",
//   },
// ];
