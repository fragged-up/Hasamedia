export type ReviewBoxProps = {
  avatar: string;
  name: string;
  role: string;
  reviewText: string;
};
const ReviewBox: React.FC<ReviewBoxProps> = ({
  avatar,
  name,
  role,
  reviewText,
}) => {
  return (
    <div className="w-full rounded-3xl border border-[#383838] bg-black p-6 lg:p-5">
      <div className="flex items-stretch gap-4">
        <div className="review-image-cont">
          <img
            src={avatar}
            alt={`${name}'s avatar`}
            className="max-h-[2.5rem] max-w-[2.5rem] rounded-full"
          />
        </div>
        <div className="flex flex-col text-left sm:pt-1">
          <h3 className="name text-left text-base text-white font-gilroy-medium lg:text-sm xl:text-base">
            {name}
          </h3>
          <p className="role text-sm text-white-secondary font-gilroy-medium lg:text-sm xl:text-base">
            {role}
          </p>
        </div>
      </div>

      <div className="box-text flex py-3 text-left">
        <p className="text-lg text-white font-gilroy-medium lg:text-base xl:text-xl">
          {reviewText}
        </p>
      </div>
    </div>
  );
};

export default ReviewBox;
