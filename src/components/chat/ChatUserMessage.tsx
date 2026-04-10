import userImage from '../../assets/user.png';

interface Props {
  message: string;
}

export function ChatUserMessage({ message }: Props) {
  return (
    <div className="flex gap-3 items-center py-4 px-5">
      <img src={userImage} alt="Profile picture" className="w-9 h-9 rounded-lg" />
      <p className="text-sm text-white leading-relaxed">{message}</p>
    </div>
  );
}
