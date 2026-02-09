import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black py-24 px-6 border-t border-white/5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="col-span-1 md:col-span-2">
          <div className="text-4xl font-black mb-8 italic tracking-tighter text-white">
            ELITE<span className="text-athletic-orange">GRIDIRON</span>
          </div>
          <p className="text-gray-500 text-lg max-w-sm mb-10 leading-relaxed">
            全美职业级橄榄球培训领导者，致力于发掘和培养下一代顶级运动员。我们将专业带到你面前。
          </p>
          <div className="flex gap-8">
            {['微信公众号', '微博', '抖音'].map(social => (
              <a key={social} href="#" className="text-gray-400 hover:text-white transition-all text-sm uppercase font-bold tracking-widest">{social}</a>
            ))}
          </div>
        </div>
        <div>
          <h5 className="text-xs font-black mb-8 uppercase tracking-[0.3em] text-white/40">快速链接</h5>
          <ul className="space-y-4 text-gray-500 font-bold">
            <li><Link href="/" className="hover:text-athletic-orange transition-colors">关于我们</Link></li>
            <li><Link href="/programs" className="hover:text-athletic-orange transition-colors">课程介绍</Link></li>
            <li><Link href="/#signup" className="hover:text-athletic-orange transition-colors">教练团队</Link></li>
            <li><Link href="/#signup" className="hover:text-athletic-orange transition-colors">营地位置</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="text-xs font-black mb-8 uppercase tracking-[0.3em] text-white/40">联系我们</h5>
          <ul className="space-y-4 text-gray-500 font-bold">
            <li className="flex items-start gap-3">
              <span className="text-athletic-orange">A:</span> 北京市朝阳区精英运动中心
            </li>
            <li className="flex items-center gap-3">
              <span className="text-athletic-orange">E:</span> contact@elitegridiron.cn
            </li>
            <li className="flex items-center gap-3">
              <span className="text-athletic-orange">T:</span> 400-123-4567
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-600 text-xs font-bold uppercase tracking-widest">
        <div>&copy; {new Date().getFullYear()} Elite Gridiron. 保留所有权利。</div>
        <div className="flex gap-10">
          <a href="#" className="hover:text-white transition-colors">隐私政策</a>
          <a href="#" className="hover:text-white transition-colors">服务条款</a>
        </div>
      </div>
    </footer>
  );
}
