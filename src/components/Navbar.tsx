import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-deep-blue/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black italic tracking-tighter text-white">
          ELITE<span className="text-athletic-orange">GRIDIRON</span>
        </Link>
        <div className="hidden md:flex items-center gap-10">
          <Link href="/" className="text-sm font-bold uppercase tracking-widest hover:text-athletic-orange transition-colors text-white">首页</Link>
          <Link href="/programs" className="text-sm font-bold uppercase tracking-widest hover:text-athletic-orange transition-colors text-white">训练课程</Link>
          <Link href="/#signup" className="text-sm font-bold uppercase tracking-widest hover:text-athletic-orange transition-colors text-white">教练团队</Link>
          <Link href="/#signup" className="text-sm font-bold uppercase tracking-widest hover:text-athletic-orange transition-colors text-white">联系我们</Link>
        </div>
        <Link href="/#signup" className="bg-athletic-orange hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105">
          立即报名
        </Link>
      </div>
    </nav>
  );
}
