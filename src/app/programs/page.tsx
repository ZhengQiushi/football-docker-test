import Image from 'next/image';
import Link from 'next/link';

export default function ProgramsPage() {
  const programs = [
    {
      id: 'youth',
      title: '青少年基础营',
      subtitle: '青少年基础训练营',
      age: '8-12 岁',
      duration: '4 周 (周末)',
      price: '¥2,800',
      description: '为初学者设计的趣味性与专业性并存的训练营。重点在于建立对橄榄球的兴趣，学习基本动作，提高身体协调性。',
      features: [
        '橄榄球基础规则讲解',
        '接球与跑动技巧',
        '非接触式基础对抗',
        '团队合作意识培养',
        '专业运动能力测评'
      ],
      image: '/assets/youth_training.jpg',
      color: 'from-blue-600/20'
    },
    {
      id: 'highschool',
      title: '高中精英营',
      subtitle: '高中精英挑战营',
      age: '13-18 岁',
      duration: '6 周 (每周 3 次)',
      price: '¥5,600',
      description: '针对有一定基础的高中运动员。模拟职业训练强度，深度剖析位置技术细节，强化战术理解与执行力。',
      features: [
        '各位置专项技术指导 (QB, WR, LB等)',
        '全装备接触性对抗训练',
        '比赛视频复盘分析',
        '身体素质与力量专项强化',
        '大学招募建议与指导'
      ],
      image: '/assets/action_1.jpg',
      color: 'from-athletic-orange/20'
    },
    {
      id: 'pro',
      title: '职业选拔营',
      subtitle: '职业球员选拔营',
      age: '18 岁+',
      duration: '2 周 (全日制封闭)',
      price: '¥12,800',
      description: '最高级别的选拔式训练。旨在发掘具备职业潜质的球员，提供与顶级教练及球探接触的机会。',
      features: [
        'NFL 标准体测 (Combine Style)',
        '1 vs 1 实战对抗演练',
        '职业球员职业规划讲座',
        '全方位个人数据报告',
        '职业俱乐部试训推荐'
      ],
      image: '/assets/action_2.jpg',
      color: 'from-purple-600/20'
    }
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Page Header */}
      <section className="bg-slate-900 py-24 px-6 border-b border-white/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-athletic-orange text-sm font-bold mb-4 tracking-[0.4em] uppercase">核心课程体系</h1>
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">训练课程详情</h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            从基础启蒙到职业选拔，我们提供最专业、最系统的美式橄榄球成长路径。
          </p>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-6xl space-y-32">
          {programs.map((program, idx) => (
            <div key={program.id} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 items-center`}>
              <div className="w-full md:w-1/2 relative group">
                <div className="absolute -inset-4 bg-athletic-orange/10 rounded-[2.5rem] blur-2xl group-hover:bg-athletic-orange/20 transition-all duration-500" />
                <div className="relative aspect-[4/5] md:aspect-square rounded-[2rem] overflow-hidden border border-white/10">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${program.color} to-transparent opacity-60`} />
                </div>
                <div className="absolute -bottom-6 -right-6 md:right-auto md:-left-6 bg-white text-deep-blue p-8 rounded-2xl shadow-2xl z-20">
                  <div className="text-xs font-black uppercase tracking-widest text-athletic-orange mb-1">价格</div>
                  <div className="text-4xl font-black tracking-tighter">{program.price}</div>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 space-y-8">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-athletic-orange text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
                      {program.age}
                    </span>
                    <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">
                      {program.duration}
                    </span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black mb-2 tracking-tight">{program.title}</h3>
                  <div className="text-athletic-orange font-bold uppercase tracking-widest text-sm italic">{program.subtitle}</div>
                </div>
                
                <p className="text-gray-400 text-lg leading-relaxed">
                  {program.description}
                </p>
                
                <div className="space-y-4">
                  <div className="text-xs font-black uppercase tracking-[0.2em] text-white/40">课程亮点</div>
                  <ul className="grid grid-cols-1 gap-3">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 group/item">
                        <div className="w-6 h-6 rounded-full bg-athletic-orange/10 flex items-center justify-center text-athletic-orange group-hover/item:bg-athletic-orange group-hover/item:text-white transition-colors">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-300 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <Link href="/#signup" className="inline-block w-full md:w-auto bg-athletic-orange hover:bg-orange-600 text-white px-12 py-5 rounded-full text-lg font-black transition-all shadow-xl shadow-athletic-orange/20 transform hover:-translate-y-1 uppercase tracking-widest text-center">
                    立即申请加入
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 bg-slate-900">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6 tracking-tighter">常见问题</h2>
            <p className="text-gray-400">关于训练营的一些疑问，也许你可以在这里找到答案。</p>
          </div>
          
          <div className="space-y-6">
            {[
              { q: '没有任何橄榄球基础可以参加吗？', a: '当然！我们的青少年基础营就是专门为零基础学员准备的。' },
              { q: '训练营提供专业装备吗？', a: '基础营无需全套装备，我们将提供训练用球及辅助器材。高中营及选拔营需自备头盔护具，我们也可以提供租赁服务。' },
              { q: '是否有伤病保障？', a: '所有报名学员都将获得营地专属保险。现场有专业理疗师和医疗团队实时待命。' }
            ].map((faq, i) => (
              <div key={i} className="bg-deep-blue/50 p-8 rounded-3xl border border-white/5 hover:border-athletic-orange/30 transition-colors">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-4">
                  <span className="text-athletic-orange">Q:</span> {faq.q}
                </h4>
                <p className="text-gray-400 pl-10">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 px-6 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter">不确定哪个课程适合你？</h2>
          <Link href="/#signup" className="inline-block border-2 border-white hover:bg-white hover:text-deep-blue text-white px-12 py-5 rounded-full text-lg font-black transition-all">
            咨询专业顾问
          </Link>
        </div>
      </section>
    </main>
  );
}
