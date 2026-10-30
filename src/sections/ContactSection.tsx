import { useState, type FC, type FormEvent } from 'react';
import { Copy, Check, Send, MapPin, AlertCircle, Mail, MessageSquare } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { SectionHeading } from '../components/SectionHeading';
import { profileData } from '../data/profile';
import { GithubIcon, LinkedinIcon } from '../components/Icons';

export const ContactSection: FC = () => {
  const { language, t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const email = profileData.contact.email;

  const handleCopyEmail = async () => {
    if (!email) return;
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Không thể sao chép email:', err);
    }
  };

  const handleMailtoSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    const targetEmail = email || 'thienthu.dev@example.com';
    const mailtoSubject = encodeURIComponent(`[Portfolio Contact] ${formData.subject || 'Liên hệ từ website'}`);
    const mailtoBody = encodeURIComponent(
      `Chào Thiện Thư,\n\nTôi là: ${formData.name} (${formData.email || 'Không đính kèm email'})\n\nNội dung trao đổi:\n${formData.message}\n`
    );

    window.location.href = `mailto:${targetEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={language === 'vi' ? 'Kết nối & Trao đổi' : 'Get In Touch'}
          title={language === 'vi' ? 'Liên hệ với tôi' : 'Contact Me'}
          subtitle={
            language === 'vi'
              ? 'Tôi luôn hào hứng thảo luận về các cơ hội thực tập, đồ án phần mềm hoặc kết nối học tập công nghệ mới.'
              : 'I am always eager to discuss internship opportunities, software coursework, or tech explorations.'
          }
        />

        {/* Ambient Glow Callout Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Channels & Cards */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 sm:p-8 rounded-3xl glass-panel hover-lift border border-slate-200/80 dark:border-white/[0.08]">
              <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center mb-4">
                <Mail className="w-5 h-5" />
              </div>

              <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-2">
                {language === 'vi' ? 'Kênh liên hệ trực tiếp' : 'Direct Channels'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                {language === 'vi'
                  ? 'Gửi email trực tiếp hoặc kết nối với tôi qua các mạng xã hội kỹ thuật.'
                  : 'Send an email directly or connect via professional technical networks.'}
              </p>

              {/* Email Card with 1-click copy */}
              <div className="p-4 rounded-2xl bg-slate-100/70 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.06] mb-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1.5">
                  Email Address
                </span>
                {email ? (
                  <div className="flex items-center justify-between gap-2">
                    <a
                      href={`mailto:${email}`}
                      className="font-mono text-sm text-cyan-600 dark:text-cyan-400 hover:underline break-all font-semibold"
                    >
                      {email}
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      type="button"
                      className="p-2 rounded-xl text-slate-500 hover:text-cyan-400 hover:bg-slate-200 dark:hover:bg-white/[0.08] transition-colors shrink-0"
                      title={copied ? 'Đã chép!' : 'Sao chép email'}
                      aria-label="Sao chép email"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-600 dark:text-amber-400">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{language === 'vi' ? 'Email: Cần bổ sung trong profile.ts' : 'Email: Pending in profile.ts'}</span>
                  </div>
                )}
              </div>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-slate-100/70 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.06] mb-6">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                  {language === 'vi' ? 'Địa điểm' : 'Location'}
                </span>
                <div className="flex items-center gap-2 text-sm text-slate-800 dark:text-slate-200 font-semibold">
                  <MapPin className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                  <span>{t(profileData.location)}</span>
                </div>
              </div>

              {/* Technical Profiles */}
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2.5">
                  {language === 'vi' ? 'Hồ sơ kỹ thuật' : 'Developer Networks'}
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {profileData.contact.githubUrl ? (
                    <a
                      href={profileData.contact.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-90 transition-opacity"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-white/[0.04] cursor-not-allowed">
                      <GithubIcon className="w-3.5 h-3.5 opacity-40" />
                      <span>GitHub (TODO)</span>
                    </span>
                  )}

                  {profileData.contact.linkedinUrl ? (
                    <a
                      href={profileData.contact.linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium bg-slate-100 dark:bg-white/[0.08] text-slate-800 dark:text-slate-200 hover:text-cyan-400 transition-colors"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-white/[0.04] cursor-not-allowed">
                      <LinkedinIcon className="w-3.5 h-3.5 opacity-40" />
                      <span>LinkedIn (TODO)</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Mail Composer Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl glass-panel hover-lift border border-slate-200/80 dark:border-white/[0.08]">
              <div className="flex items-center gap-2 mb-2 text-indigo-500 dark:text-cyan-400">
                <MessageSquare className="w-5 h-5" />
                <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
                  {language === 'vi' ? 'Gửi lời nhắn trực tiếp' : 'Send a Message'}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                {language === 'vi'
                  ? 'Soạn nội dung và bấm gửi, hệ thống sẽ mở ứng dụng email của bạn với tiêu đề và thư đã chuẩn bị sẵn.'
                  : 'Compose your message below. Clicking send will open your default email client with your prefilled note.'}
              </p>

              <form onSubmit={handleMailtoSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      {language === 'vi' ? 'Họ và tên *' : 'Your Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={language === 'vi' ? 'Nguyễn Văn A' : 'Jane Doe'}
                      className="w-full px-4 py-2.5 rounded-2xl text-sm bg-slate-100/60 dark:bg-white/[0.04] border border-slate-300/80 dark:border-white/[0.08] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      {language === 'vi' ? 'Email phản hồi' : 'Your Email'}
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="example@mail.com"
                      className="w-full px-4 py-2.5 rounded-2xl text-sm bg-slate-100/60 dark:bg-white/[0.04] border border-slate-300/80 dark:border-white/[0.08] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    {language === 'vi' ? 'Tiêu đề' : 'Subject'}
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={language === 'vi' ? 'Trao đổi về cơ hội thực tập / đồ án' : 'Software discussion / Internship inquiry'}
                    className="w-full px-4 py-2.5 rounded-2xl text-sm bg-slate-100/60 dark:bg-white/[0.04] border border-slate-300/80 dark:border-white/[0.08] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    {language === 'vi' ? 'Nội dung tin nhắn *' : 'Message *'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={language === 'vi' ? 'Nội dung bạn muốn trao đổi cùng Thiện Thư...' : 'Write your note here...'}
                    className="w-full px-4 py-2.5 rounded-2xl text-sm bg-slate-100/60 dark:bg-white/[0.04] border border-slate-300/80 dark:border-white/[0.08] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="ember-btn w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-heading font-bold text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.01] active:scale-95 focus:outline-none"
                >
                  <Send className="w-4 h-4" />
                  <span>{language === 'vi' ? 'Mở trình duyệt Email & Gửi' : 'Open in Email Client & Send'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
