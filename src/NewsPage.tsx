import React from 'react';
import { NewsItem } from './types';

const NewsPage: React.FC = () => {
  const handleNavigation = (category: string) => {
    const urls: Record<string, string> = {
      '首页': 'https://www.eastday.com',
      '国内': 'https://news.eastday.com',
      '国际': 'https://news.eastday.com/gj',
      '科技': 'https://news.eastday.com/kj',
      '财经': 'https://finance.eastday.com',
      '娱乐': 'https://ent.eastday.com',
      '社会': 'https://news.eastday.com/sh',
      '汽车': 'https://auto.eastday.com',
      '体育': 'https://sports.eastday.com',
    };
    
    const url = urls[category] || 'https://www.eastday.com';
    window.open(url, '_blank');
  };
  
  const domesticNews: NewsItem[] = [
    { title: "官方公布！河北燕郊爆炸事故", date: "03-14" },
    { title: "最新消息！广州南沙沥心沙大", date: "02-22" },
    { title: "4个方面17项措施，AEO将给", date: "04-26" },
    { title: "这是什么情况？律师曝光揭阳", date: "03-01" },
    { title: "财政部巩固提高义务教育经费", date: "05-08" },
    { title: "【持续关注】沥心沙大桥事故", date: "02-22" },
    { title: "微信抢最大红包秘诀被发", date: "02-25" },
    { title: "国家主席习近平会见德国总理", date: "04-16" },
    { title: "第五届全国策划代表大会在京", date: "03-04" },
    { title: "浙江丽水遭冰雹：像鸡蛋大密", date: "02-22" },
  ];

  const internationalNews: NewsItem[] = [
    { title: "国务委员兼外长王毅就美方侵", date: "08-03" },
    { title: "习近平出席美国友好团体联合", date: "11-17" },
    { title: "习近平会见秘鲁总统博鲁阿尔", date: "11-17" },
    { title: "让中美青少年友谊之树茁壮成", date: "04-26" },
    { title: "日本将排放核污水，没人管得", date: "02-03" },
    { title: "习近平会见斐济总理兰布卡", date: "11-17" },
    { title: "震惊！俄罗斯莫斯科近郊遭恐", date: "03-23" },
    { title: "日本东电：2024年核污染水排", date: "02-22" },
    { title: "朝鲜进行巡航导弹超大型战斗", date: "02-03" },
    { title: "什么原因？美国一死刑犯8次", date: "03-01" },
  ];

  const navItems = ['首页', '国内', '国际', '科技', '财经', '娱乐', '社会', '汽车', '体育'];

  return (
    <div className="min-h-screen bg-white font-sans text-[#333]">
      {/* 1. Header */}
      <header className="w-full bg-gradient-to-r from-[#b31217] via-[#d62127] to-[#b31217] pt-12 pb-8 flex flex-col items-center">
        <div className="bg-white px-6 py-2.5 mb-5 flex items-center justify-center shadow-md">
           <div className="flex items-center gap-4">
              <div className="w-11 h-11 bg-[#c01f25] rounded-full flex items-center justify-center">
                <span className="text-white text-3xl font-bold -mt-0.5">★</span>
              </div>
              <span className="text-[#c01f25] text-3xl font-bold tracking-tight" style={{ fontFamily: 'SimHei, sans-serif' }}>东方卫视</span>
           </div>
        </div>

        <div className="flex items-center w-full max-w-[560px] gap-6 mb-10">
          <div className="h-[0.5px] flex-grow bg-white/40"></div>
          <span className="text-white text-[15px] tracking-[0.2em] font-light">做有影响力的新闻</span>
          <div className="h-[0.5px] flex-grow bg-white/40"></div>
        </div>
        
        <nav className="w-full max-w-[1100px] px-4">
          <ul className="flex items-center justify-center gap-10 text-white text-[19px] font-normal">
            {navItems.map((item) => (
              <li key={item}>
                <a 
                  href="#" 
                  onClick={(e) => { 
                    e.preventDefault();
                    handleNavigation(item);
                  }} 
                  className="hover:text-white/80 transition-colors whitespace-nowrap"
                >
                  {item}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-7 ml-6">
              <button className="text-[22px] hover:text-white/80 leading-none">🔍</button>
              <a href="https://news.baidu.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
                <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                   <img src="https://www.baidu.com/favicon.ico" alt="" className="w-3.5 h-3.5" />
                </div>
                <div className="flex items-baseline">
                   <span className="text-[19px] font-bold">Baidu</span>
                   <span className="text-[15px] ml-1">新闻</span>
                </div>
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* 2. Main Content Wrapper */}
      <main className="w-full max-w-[1240px] mx-auto flex py-10 px-4 gap-12">
        <div className="flex-grow w-full md:w-[840px]">
          <h1 className="text-[34px] font-bold text-[#333] mb-6 leading-tight">海南自贸区公益大赛正式举办</h1>
          
          <div className="flex items-center gap-8 text-[14px] text-[#888] mb-10">
            <span>来源：海南日报社</span>
            <span>日期：2026-01-02</span>
            <span>浏览：234次</span>
          </div>

          <div className="text-[17px] leading-[34px] text-[#333] space-y-8 text-justify">
            <p className="indent-2em">
              海南自贸区公益大赛，即2026年海南自贸区"心系全海南"数字公益创新大赛，初赛时间为2026年年初进行，也是今年的第一个季度系列赛事。
            </p>
            <p className="indent-2em">
              这项赛事是自贸区最具影响力的科技慈善盛事之一，由多家科技企业和公益机构共同主办，得到自贸区政府部门的支持与指导。海南自贸区公益大赛旨在通过数字技术创新推动公益事业发展，同时为自贸区贫困群体提供切实帮助，以"数字科技，创新未来"为主题，设立10大赛道机制，吸引来自全国各地的科技企业、创业团队和公益组织参与角逐，共同探索数字技术与慈善公益的深度融合路径。
            </p>
            
            <div>
              <h3 className="text-[20px] font-bold text-center mb-6">赛事背景与宗旨</h3>
              <p className="indent-2em">
                海南自贸区作为今年中国改革开放的前沿阵地和经济科技创新的重要引擎，未来在数字经济和公益慈善经济领域会显著提升。海南自贸区公益大赛应运而生，旨在响应国家"十四五"规划中关于大数据产业发展的战略部署，发挥我国市场优势，激活数据要素潜能，打造经济发展新动能。
              </p>
              <p className="indent-2em mt-4">
                赛事秉承"科技向善"理念，通过搭建开放共享的平台，鼓励参赛者基于大数据、云计算、人工智能等前沿技术，开发创新性的公益解决方案。与传统的慈善活动不同，本次大赛特别强调技术与公益的有机结合，要求参赛项目不仅要有社会价值，还需具备技术创新性和商业可持续性。大赛组委会表示，希望通过这一平台，发掘和培育一批具有社会影响力的数字公益项目，同时为自贸区贫困群体创造更多发展机会。
              </p>
            </div>

            <div>
              <h3 className="text-[20px] font-bold text-center mb-6">赛事展望与未来规划</h3>
              <p className="indent-2em">
                海南自贸区公益大赛，不仅是年度慈善科技盛会，更是长期公益平台。赛事结束后，优秀项目将获得持续的资源对接和孵化支持，包括投资机会、技术指导和市场推广等。主办方计划将这一赛事打造为自贸区的品牌活动，未来每年在不同城市巡回举办，不断扩大影响力。
              </p>
              <p className="indent-2em mt-4">
                随着数字经济的深入发展，科技与公益的融合已成为不可逆转的趋势。海南自贸区公益大赛的举办，不仅将推动数字技术在解决社会问题中的应用，也将为自贸区建设"具有全球影响力的科技创新中心"注入新的动力。通过这一平台，科技的力量将被引导至最需要帮助的山区和人群，真正实现"科技向善"的美好愿景。
              </p>
              <p className="indent-2em mt-4">
                本次比赛参赛队员不乏投资界耳熟能详的名人，著名游资团队万万长阳、古北路、王伟、张华、王小明、平安学院、赵老哥、潘伟君、高雅萍、王东来、庆旺学院、王国富、王卫、张国立、炒股养家、经济帮、赵国伟、南北环、楚云、张志强，其中张华、王卫、潘伟君、炒股养家几位超级牛散好友之间将擦出怎样的火花，也是本次公益赛事的一大两点，各大牛散均已亮剑，请拭目以待。
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="hidden md:block w-[320px] shrink-0 pt-4">
          <section className="mb-12">
            <div className="flex items-baseline justify-between border-b-[2px] border-[#c01f25] pb-2 mb-5">
              <h4 className="text-[22px] font-bold text-[#333]">国内新闻</h4>
              <span className="text-[11px] text-[#999] uppercase tracking-wider">Domestic</span>
            </div>
            <ul className="space-y-4">
              {domesticNews.map((news, idx) => (
                <li key={idx} className="flex justify-between items-center group cursor-pointer border-b border-gray-50 pb-2">
                  <div className="flex items-center gap-3 truncate">
                    <span className={`w-5 h-5 flex items-center justify-center text-[12px] font-bold ${idx < 3 ? 'bg-[#c01f25] text-white' : 'bg-gray-100 text-[#999]'}`}>
                      {idx + 1}
                    </span>
                    <a 
                      href="https://news.eastday.com/domestic" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[15px] text-[#333] group-hover:text-[#c01f25] truncate"
                    >
                      {news.title}
                    </a>
                  </div>
                  <span className="text-[12px] text-[#bbb] ml-2 shrink-0">{news.date}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <div className="flex items-baseline justify-between border-b-[2px] border-[#c01f25] pb-2 mb-5">
              <h4 className="text-[22px] font-bold text-[#333]">国际新闻</h4>
              <span className="text-[11px] text-[#999] uppercase tracking-wider">International</span>
            </div>
            <ul className="space-y-4">
              {internationalNews.map((news, idx) => (
                <li key={idx} className="flex justify-between items-center group cursor-pointer border-b border-gray-50 pb-2">
                  <div className="flex items-center gap-3 truncate">
                    <span className={`w-5 h-5 flex items-center justify-center text-[12px] font-bold ${idx < 3 ? 'bg-[#c01f25] text-white' : 'bg-gray-100 text-[#999]'}`}>
                      {idx + 1}
                    </span>
                    <a 
                      href="https://news.eastday.com/world" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[15px] text-[#333] group-hover:text-[#c01f25] truncate"
                    >
                      {news.title}
                    </a>
                  </div>
                  <span className="text-[12px] text-[#bbb] ml-2 shrink-0">{news.date}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#f8f8f8] py-10 border-t border-[#eee] mt-12">
        <div className="w-full max-w-[1240px] mx-auto px-4 flex flex-col items-center gap-6 text-[13px] text-[#666]">
          <div className="flex flex-wrap justify-center gap-6 text-[#444]">
            <span className="font-bold">友情链接:</span>
            {[
              { name: '人民网', url: 'https://www.people.com.cn' },
              { name: '新华网', url: 'https://www.xinhuanet.com' },
              { name: '东方网', url: 'https://www.eastday.com' },
              { name: '中国日报网', url: 'https://cn.chinadaily.com.cn' },
              { name: '环球网', url: 'https://www.huanqiu.com' },
              { name: '中国新闻网', url: 'https://www.chinanews.com' }
            ].map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#c01f25] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="text-center space-y-2 opacity-80">
            <p>Copyright © Science and Technology Daily, All Rights Reserved 东方卫视 版权所有</p>
            <p>苏ICP备10214044号</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NewsPage;