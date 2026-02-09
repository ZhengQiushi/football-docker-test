import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden pt-20">
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-80px)] min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/hero.jpg"
            alt="Football Camp Hero"
            fill
            className="object-cover opacity-50 scale-105 animate-[slow-zoom_20s_ease-in-out_infinite]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-deep-blue/80 via-transparent to-deep-blue" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-block mb-6 px-4 py-1 border border-athletic-orange/30 rounded-full bg-athletic-orange/10 backdrop-blur-sm">
            <span className="text-athletic-orange text-xs font-bold uppercase tracking-[0.3em]">2026 夏季训练营现已开放报名</span>
          </div>
          <h1 className="text-6xl md:text-9xl mb-8 leading-[0.9] font-black tracking-tighter">
            开启您的<br />
            <span className="text-athletic-orange inline-block hover:skew-x-2 transition-transform cursor-default">职业橄榄球</span>梦想
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            加入精英美式橄榄球训练营，与职业教练面对面，<br className="hidden md:block" />磨炼技艺，挑战自我，通往竞技巅峰。
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link href="#signup" className="bg-athletic-orange hover:bg-orange-600 text-white px-12 py-5 rounded-full text-lg font-bold transition-all shadow-lg shadow-athletic-orange/20 transform hover:-translate-y-1 text-center">
              立即报名
            </Link>
            <Link href="/programs" className="group border-2 border-white/20 hover:border-white text-white px-12 py-5 rounded-full text-lg font-bold transition-all flex items-center justify-center gap-2">
              了解更多课程
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white text-deep-blue py-24 relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { value: '500+', label: '培训学员' },
              { value: '15+', label: '职业教练' },
              { value: '50+', label: '大学奖学金' },
              { value: '10', label: '多年经验' }
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-6xl font-black text-athletic-orange tracking-tighter">{stat.value}</div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-deep-blue/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-32 px-6 bg-deep-blue relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-athletic-orange/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-athletic-orange text-sm font-bold mb-4 tracking-[0.4em] uppercase">训练课程体系</h2>
              <h3 className="text-5xl md:text-7xl font-black leading-tight">全方位训练方案</h3>
            </div>
            <p className="text-gray-400 text-lg max-w-md leading-relaxed">
              我们为不同年龄和水平的运动员提供量身定制的训练方案，旨在挖掘每一位球员的潜能。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: '青少年基础营',
                age: '8-12 岁',
                desc: '侧重于基本功、协调性和橄榄球规则的初级理解。',
                image: '/assets/youth_training.jpg',
                color: 'from-blue-600/20'
              },
              {
                title: '高中精英营',
                age: '13-18 岁',
                desc: '高强度的位置技术细节、战术执行和身体对抗训练。',
                image: '/assets/action_1.jpg',
                color: 'from-athletic-orange/20'
              },
              {
                title: '职业选拔营',
                age: '18岁+',
                desc: '针对希望进入半职业或大学联赛的顶尖球员，包含体测和实战。',
                image: '/assets/action_2.jpg',
                color: 'from-purple-600/20'
              },
            ].map((program, idx) => (
              <div key={idx} className="group relative bg-slate-900/50 rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500">
                <div className="h-[400px] relative overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${program.color} via-deep-blue/40 to-transparent`} />
                  <div className="absolute inset-0 bg-deep-blue/20 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <span className="bg-athletic-orange text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-xl">
                      {program.age}
                    </span>
                    <h4 className="text-3xl font-black mt-4 tracking-tight">{program.title}</h4>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-400 mb-8 line-clamp-2">{program.desc}</p>
                  <Link href="/programs" className="flex items-center gap-3 text-white font-bold group/btn">
                    <span className="relative">
                      了解详情
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-athletic-orange transition-all duration-300 group-hover/btn:w-full" />
                    </span>
                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-athletic-orange group-hover/btn:border-athletic-orange transition-all duration-300">
                      <span className="text-sm">&rarr;</span>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="py-32 px-6 bg-slate-900">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-athletic-orange text-sm font-bold mb-4 tracking-[0.4em] uppercase">顶尖教练团队</h2>
            <h3 className="text-5xl md:text-7xl font-black">专家级指导</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                name: 'Coach Marcus',
                title: '主教练 / 前NFL线卫',
                bio: '拥有10年职业联赛经验，曾效力于达拉斯牛仔队，擅长防守体系建设。',
                image: '/assets/coach_1.jpg',
              },
              {
                name: 'Coach Sarah',
                title: '体能总监',
                bio: '国家级体能训练师，专注于运动员的爆发力、速度和伤病预防。',
                image: '/assets/coach_2.jpg',
              },
              {
                name: 'Coach David',
                title: '进攻协调员',
                bio: '曾任顶尖大学校队助理教练，对传球战术和四分卫培养有独到见解。',
                image: '/assets/coach_3.jpg',
              },
            ].map((coach, idx) => (
              <div key={idx} className="group text-center">
                <div className="w-72 h-72 mx-auto mb-10 relative">
                  <div className="absolute inset-0 rounded-full border-2 border-athletic-orange/20 scale-110 group-hover:scale-125 transition-transform duration-500 opacity-0 group-hover:opacity-100" />
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/5 group-hover:border-athletic-orange transition-all duration-500 relative z-10">
                    <Image
                      src={coach.image}
                      alt={coach.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
                <h4 className="text-3xl font-black mb-2 tracking-tight">{coach.name}</h4>
                <div className="text-athletic-orange text-xs font-bold uppercase tracking-widest mb-6">{coach.title}</div>
                <p className="text-gray-400 leading-relaxed max-w-sm mx-auto">{coach.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sign Up / Contact Section */}
      <section id="signup" className="py-40 px-6 relative overflow-hidden bg-white text-deep-blue">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1 space-y-10">
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
                现在报名<br />
                <span className="text-athletic-orange">开启巅峰</span>
              </h2>
              <p className="text-xl text-deep-blue/70 max-w-lg leading-relaxed">
                填写下方表单，我们的专业顾问将在 24 小时内与您取得联系，为您提供一对一的课程咨询。
              </p>
              <div className="space-y-6">
                {[
                  { label: '电话咨询', value: '400-123-4567' },
                  { label: '办公地址', value: '北京市朝阳区精英运动中心' },
                  { label: '电子邮箱', value: 'contact@elitegridiron.cn' }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-widest text-athletic-orange">{item.label}</span>
                    <span className="text-2xl font-black tracking-tight">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex-1 w-full max-w-2xl">
              <form className="bg-slate-50 p-12 rounded-[3rem] border border-slate-200 shadow-2xl space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-deep-blue/40 ml-4">姓名</label>
                    <input type="text" className="w-full bg-white border border-slate-200 px-6 py-4 rounded-2xl outline-none focus:border-athletic-orange transition-colors" placeholder="您的姓名" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-deep-blue/40 ml-4">电话</label>
                    <input type="tel" className="w-full bg-white border border-slate-200 px-6 py-4 rounded-2xl outline-none focus:border-athletic-orange transition-colors" placeholder="手机号码" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-deep-blue/40 ml-4">意向课程</label>
                  <select className="w-full bg-white border border-slate-200 px-6 py-4 rounded-2xl outline-none focus:border-athletic-orange transition-colors appearance-none">
                    <option>青少年基础营 (8-12 岁)</option>
                    <option>高中精英营 (13-18 岁)</option>
                    <option>职业选拔营 (18 岁+)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-deep-blue/40 ml-4">补充信息</label>
                  <textarea className="w-full bg-white border border-slate-200 px-6 py-4 rounded-2xl outline-none focus:border-athletic-orange transition-colors h-32 resize-none" placeholder="告诉我们更多关于您的橄榄球背景..." />
                </div>
                <button className="w-full bg-athletic-orange text-white py-6 rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-orange-600 transition-all shadow-xl shadow-athletic-orange/20">
                  提交申请
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
