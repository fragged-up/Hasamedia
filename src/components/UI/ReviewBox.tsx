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
    <div className="rev-box">
      <div className="flex gap-4">
        <div className="review-image-cont">
          <img
            src={avatar}
            alt={`${name}'s avatar`}
            className="max-w-[2.5rem] max-h-[2.5rem] rounded-full"
          />
        </div>
        <div className="text-box">
          <h3 className="name text-base font-gilroy-medium text-white">
            {name}
          </h3>
          <p className="role font-gilroy-medium text-sm text-white-secondary">
            {role}
          </p>
        </div>
      </div>

      <div className="py-6">
        <p className="font-gilroy-medium text-lg text-white">{reviewText}</p>
      </div>
    </div>
  );
};

export default ReviewBox;
