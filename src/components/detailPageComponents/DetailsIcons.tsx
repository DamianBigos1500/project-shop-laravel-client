import { BsFacebook, BsPinterest } from 'react-icons/bs';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';

export default function DetailsIcons() {
  return (
    <div className="flex items-center space-x-6 mt-8">
      <button>
        <BsFacebook />
      </button>
      <button>
        <AiOutlineTwitter />
      </button>
      <button>
        <BsPinterest />
      </button>
      <button>
        <AiOutlineInstagram />
      </button>
    </div>
  );
}
