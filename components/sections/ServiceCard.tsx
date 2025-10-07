import Icon from '@/components/ui/Icon';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  color: string;
}

export default function ServiceCard({ icon, title, description, color }: ServiceCardProps) {
  return (
    <div
      className="p-8 rounded-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer"
      style={{
        background: 'var(--card)',
        border: '1px solid var(--border)',
        boxShadow: 'var(--shadow-sm)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      }}
    >
      <div
        className="w-16 h-16 mb-4 flex items-center justify-center rounded-lg transition-transform hover:rotate-[-5deg]"
        style={{ background: color, color: 'white' }}
      >
        <Icon name={icon} size={32} />
      </div>
      <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}