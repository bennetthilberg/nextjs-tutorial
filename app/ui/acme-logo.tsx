//import { lusitana } from '@/app/ui/fonts';
import { lusitana } from './fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <span className="h-12 w-12 rotate-[15deg]" >globe</span>
      <p className="text-[44px]">Acme</p>
    </div>
  );
}
