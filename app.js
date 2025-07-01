import React, { useState } from 'react';
import { ChevronDown, ChevronUp, AlertTriangle } from 'lucide-react';

// Ícones personalizados para cada tipo de risco com cores específicas
const RiskIcons = {
  eletricidade: ({ size = 'w-6 h-6' } = {}) => (
    <svg viewBox="0 0 24 24" className={size}>
      <defs>
        <linearGradient id="electricGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FCD34D" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
      </defs>
      <path d="M13 3L8 14h3l-2 7 7-10h-3l2-8z" fill="url(#electricGrad)" stroke="#D97706" strokeWidth="0.5"/>
      <circle cx="6" cy="6" r="1.5" fill="#EF4444" opacity="0.8"/>
      <circle cx="18" cy="8" r="1" fill="#EF4444" opacity="0.6"/>
    </svg>
  ),
  espacoConfinado: ({ size = 'w-6 h-6' } = {}) => (
    <svg viewBox="0 0 24 24" className={size}>
      <defs>
        <linearGradient id="confinedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6B7280" />
          <stop offset="100%" stopColor="#374151" />
        </linearGradient>
      </defs>
      <rect x="4" y="8" width="16" height="12" rx="2" fill="url(#confinedGrad)" stroke="#1F2937" strokeWidth="1"/>
      <circle cx="12" cy="6" r="1.5" fill="#3B82F6"/>
      <rect x="11" y="7" width="2" height="4" fill="#3B82F6"/>
      <rect x="10" y="9" width="1.5" height="2" fill="#3B82F6"/>
      <rect x="12.5" y="9" width="1.5" height="2" fill="#3B82F6"/>
      <rect x="10" y="8" width="4" height="2" fill="#60A5FA" opacity="0.7"/>
      <circle cx="18" cy="10" r="1" fill="#EF4444"/>
    </svg>
  ),
  maquinas: ({ size = 'w-6 h-6' } = {}) => (
    <svg viewBox="0 0 24 24" className={size}>
      <defs>
        <linearGradient id="machineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      <rect x="3" y="14" width="18" height="6" rx="1" fill="url(#machineGrad)" stroke="#6D28D9" strokeWidth="0.5"/>
      <circle cx="8" cy="10" r="3" fill="none" stroke="#8B5CF6" strokeWidth="2"/>
      <circle cx="16" cy="10" r="3" fill="none" stroke="#8B5CF6" strokeWidth="2"/>
      <path d="M8 7l1 1-1 1-1-1z M8 11l1 1-1 1-1-1z M6 10l1-1 1 1-1 1z M10 10l1-1 1 1-1 1z" fill="#8B5CF6"/>
      <path d="M16 7l1 1-1 1-1-1z M16 11l1 1-1 1-1-1z M14 10l1-1 1 1-1 1z M18 10l1-1 1 1-1 1z" fill="#8B5CF6"/>
      <rect x="6" y="4" width="12" height="2" rx="1" fill="#EF4444" opacity="0.8"/>
    </svg>
  ),
  quimicos: ({ size = 'w-6 h-6' } = {}) => (
    <svg viewBox="0 0 24 24" className={size}>
      <defs>
        <linearGradient id="chemicalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>
      <path d="M9 3v4l-2 4v8c0 1 1 2 2 2h6c1 0 2-1 2-2v-8l-2-4V3H9z" fill="url(#chemicalGrad)" stroke="#047857" strokeWidth="0.5"/>
      <path d="M7 11v6c0 1 1 2 2 2h6c1 0 2-1 2-2v-6l-2-4H9l-2 4z" fill="#34D399" opacity="0.7"/>
      <circle cx="10" cy="5" r="0.5" fill="#6B7280" opacity="0.6"/>
      <circle cx="12" cy="4" r="0.5" fill="#6B7280" opacity="0.4"/>
      <circle cx="14" cy="5" r="0.5" fill="#6B7280" opacity="0.6"/>
      <circle cx="18" cy="6" r="1.5" fill="#EF4444"/>
      <path d="M17.5 5.5h1v1h-1z" fill="white"/>
    </svg>
  ),
  altura: ({ size = 'w-6 h-6' } = {}) => (
    <svg viewBox="0 0 24 24" className={size}>
      <defs>
        <linearGradient id="heightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
      </defs>
      <rect x="2" y="18" width="20" height="2" fill="#6B7280"/>
      <rect x="4" y="8" width="1" height="10" fill="#6B7280"/>
      <rect x="19" y="8" width="1" height="10" fill="#6B7280"/>
      <circle cx="12" cy="6" r="1.5" fill="#F59E0B"/>
      <rect x="11" y="7" width="2" height="3" fill="url(#heightGrad)"/>
      <rect x="10.5" y="9" width="1" height="2" fill="url(#heightGrad)"/>
      <rect x="12.5" y="9" width="1" height="2" fill="url(#heightGrad)"/>
      <ellipse cx="12" cy="5.5" rx="1.5" ry="1" fill="#F59E0B"/>
      <path d="M10.5 8h3v0.5h-3z" fill="#DC2626"/>
      <path d="M11.5 8.5v2h1v-2z" fill="#DC2626"/>
      <path d="M12 10.5C12 12 14 14 16 16" stroke="#DC2626" strokeWidth="1" fill="none"/>
      <circle cx="16" cy="16" r="1" fill="#DC2626"/>
    </svg>
  ),
  incendio: ({ size = 'w-6 h-6' } = {}) => (
    <svg viewBox="0 0 24 24" className={size}>
      <defs>
        <linearGradient id="fireGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FEF3C7" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#DC2626" />
        </linearGradient>
      </defs>
      <path d="M12 2c1.5 6 6 8 6 12 0 3.3-2.7 6-6 6s-6-2.7-6-6c0-4 4.5-6 6-12z" fill="url(#fireGrad)"/>
      <path d="M12 6c1 4 4 5 4 8 0 2.2-1.8 4-4 4s-4-1.8-4-4c0-3 3-4 4-8z" fill="#FCD34D"/>
      <rect x="18" y="12" width="2" height="6" rx="1" fill="#DC2626"/>
      <rect x="17.5" y="10" width="3" height="2" rx="0.5" fill="#374151"/>
      <circle cx="19" cy="11" r="0.5" fill="#6B7280"/>
    </svg>
  )
};

const RiskManagementApp = () => {
  const [activeTab, setActiveTab] = useState('checklist');
  const [expandedSections, setExpandedSections] = useState({});
  const [checklistData, setChecklistData] = useState({
    eletricidade: {
      items: [
        { id: 1, text: 'Verificar isolamento elétrico de todos os equipamentos', status: '' },
        { id: 2, text: 'Confirmar desligamento e bloqueio da energia (LOTO)', status: '' },
        { id: 3, text: 'Usar EPIs adequados (luvas isolantes, capacete, óculos)', status: '' },
        { id: 4, text: 'Testar ausência de tensão com equipamento calibrado', status: '' },
        { id: 5, text: 'Instalar aterramento temporário quando necessário', status: '' },
        { id: 6, text: 'Verificar condições climáticas (umidade, chuva)', status: '' },
        { id: 7, text: 'Manter distância de segurança de partes energizadas', status: '' },
        { id: 8, text: 'Ter equipamento de emergência próximo (extintor CO2)', status: '' }
      ]
    },
    espacoConfinado: {
      items: [
        { id: 9, text: 'Autorização de entrada válida e assinada', status: '' },
        { id: 10, text: 'Monitoramento contínuo de gases (O2, H2S, LEL, CO)', status: '' },
        { id: 11, text: 'Sistema de ventilação forçada em funcionamento', status: '' },
        { id: 12, text: 'Vigias treinados posicionados do lado externo', status: '' },
        { id: 13, text: 'Equipamento de resgate e comunicação disponível', status: '' },
        { id: 14, text: 'Isolamento de energias perigosas', status: '' },
        { id: 15, text: 'Iluminação adequada e à prova de explosão', status: '' },
        { id: 16, text: 'Procedimento de emergência definido e conhecido', status: '' },
        { id: 17, text: 'Tripé de resgate e cabo de segurança instalados', status: '' }
      ]
    },
    maquinas: {
      items: [
        { id: 18, text: 'Máquina bloqueada e etiquetada (LOTO)', status: '' },
        { id: 19, text: 'Proteções e dispositivos de segurança instalados', status: '' },
        { id: 20, text: 'Treinamento específico na máquina realizado', status: '' },
        { id: 21, text: 'Procedimento operacional conhecido e seguido', status: '' },
        { id: 22, text: 'Área de trabalho sinalizada e isolada', status: '' },
        { id: 23, text: 'Verificar funcionamento de botões de emergência', status: '' },
        { id: 24, text: 'Inspeção de cabos, correias e componentes móveis', status: '' },
        { id: 25, text: 'Ferramentas adequadas e em bom estado', status: '' },
        { id: 26, text: 'Verificar pressão de sistemas pneumáticos/hidráulicos', status: '' }
      ]
    },
    quimicos: {
      items: [
        { id: 27, text: 'FISPQ consultada e compreendida', status: '' },
        { id: 28, text: 'EPIs específicos utilizados (respirador, luvas químicas)', status: '' },
        { id: 29, text: 'Área com ventilação adequada', status: '' },
        { id: 30, text: 'Kit de emergência química disponível', status: '' },
        { id: 31, text: 'Chuveiro e lava-olhos próximos e funcionando', status: '' },
        { id: 32, text: 'Produtos incompatíveis separados adequadamente', status: '' },
        { id: 33, text: 'Contenções secundárias instaladas', status: '' },
        { id: 34, text: 'Sinalização de riscos químicos visível', status: '' },
        { id: 35, text: 'Medidor de gases/vapores calibrado disponível', status: '' },
        { id: 36, text: 'Procedimento de descarte definido', status: '' }
      ]
    },
    altura: {
      items: [
        { id: 37, text: 'Análise preliminar de risco (APR) elaborada', status: '' },
        { id: 38, text: 'Sistema de proteção contra quedas instalado', status: '' },
        { id: 39, text: 'Treinamento NR-35 válido (menos de 2 anos)', status: '' },
        { id: 40, text: 'Condições climáticas favoráveis (vento < 40 km/h)', status: '' },
        { id: 41, text: 'Cinto de segurança tipo paraquedista verificado', status: '' },
        { id: 42, text: 'Pontos de ancoragem certificados e inspecionados', status: '' },
        { id: 43, text: 'Linha de vida ou trava-quedas em uso', status: '' },
        { id: 44, text: 'Andaimes inspecionados e liberados', status: '' },
        { id: 45, text: 'Área inferior isolada e sinalizada', status: '' },
        { id: 46, text: 'Plano de resgate elaborado e conhecido', status: '' }
      ]
    },
    incendio: {
      items: [
        { id: 47, text: 'Extintores adequados verificados e dentro da validade', status: '' },
        { id: 48, text: 'Rotas de fuga desobstruídas e sinalizadas', status: '' },
        { id: 49, text: 'Sistema de alarme testado e funcionando', status: '' },
        { id: 50, text: 'Materiais inflamáveis controlados e segregados', status: '' },
        { id: 51, text: 'Permissão de trabalho a quente válida', status: '' },
        { id: 52, text: 'Hidrantes próximos testados e acessíveis', status: '' },
        { id: 53, text: 'Equipamentos elétricos à prova de explosão', status: '' },
        { id: 54, text: 'Vigia contra incêndio posicionado', status: '' },
        { id: 55, text: 'Procedimento de emergência conhecido', status: '' },
        { id: 56, text: 'Comunicação com brigada de incêndio estabelecida', status: '' }
      ]
    }
  });

  const riskLabels = {
    eletricidade: 'Eletricidade',
    espacoConfinado: 'Espaço Confinado',
    maquinas: 'Máquinas',
    quimicos: 'Químicos',
    altura: 'Trabalho em Altura',
    incendio: 'Incêndio'
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleStatusChange = (riskType, itemId, newStatus) => {
    setChecklistData(prev => ({
      ...prev,
      [riskType]: {
        ...prev[riskType],
        items: prev[riskType].items.map(item =>
          item.id === itemId ? { ...item, status: newStatus } : item
        )
      }
    }));
  };

  const getCompletionPercentage = (riskType) => {
    const items = checklistData[riskType].items;
    const totalItems = items.length;
    const simItems = items.filter(item => item.status === 'sim').length;
    const parcialItems = items.filter(item => item.status === 'parcial').length;
    const naItems = items.filter(item => item.status === 'na').length;
    
    // Calcula pontuação: Sim = 100%, Parcial = 50%, NA = 100%, Não = 0%
    const score = (simItems * 100) + (parcialItems * 50) + (naItems * 100);
    const maxScore = totalItems * 100;
    
    return Math.round((score / maxScore) * 100);
  };

  const getInsights = (riskType) => {
    const items = checklistData[riskType].items;
    const problemItems = items.filter(item => item.status === 'nao' || item.status === 'parcial');
    
    const insights = {
      eletricidade: {
        'Verificar isolamento elétrico de todos os equipamentos': 'Contrate um eletricista qualificado para inspeção.',
        'Confirmar desligamento e bloqueio da energia (LOTO)': 'Implemente procedimento LOTO com cadeados específicos.',
        'Usar EPIs adequados (luvas isolantes, capacete, óculos)': 'Forneça EPIs certificados e treine a equipe.',
        'Testar ausência de tensão com equipamento calibrado': 'Adquira detector de tensão certificado.',
        'Instalar aterramento temporário quando necessário': 'Tenha kit de aterramento portátil disponível.',
        'Verificar condições climáticas (umidade, chuva)': 'Use higrômetro e suspenda trabalhos se umidade acima de 95%.',
        'Manter distância de segurança de partes energizadas': 'Demarque zonas de risco com barreiras físicas.',
        'Ter equipamento de emergência próximo (extintor CO2)': 'Instale extintor classe C próximo ao trabalho.'
      },
      espacoConfinado: {
        'Autorização de entrada válida e assinada': 'Crie formulário padrão com supervisor capacitado.',
        'Monitoramento contínuo de gases (O2, H2S, LEL, CO)': 'Adquira detector multigás calibrado.',
        'Sistema de ventilação forçada em funcionamento': 'Instale exaustores e verifique fluxo de ar.',
        'Vigias treinados posicionados do lado externo': 'Treine vigias em NR-33.',
        'Equipamento de resgate e comunicação disponível': 'Tenha rádios e equipos de resgate próximos.',
        'Isolamento de energias perigosas': 'Implemente LOTO para todos os sistemas.',
        'Iluminação adequada e à prova de explosão': 'Use luminárias certificadas com mínimo 500 lux.',
        'Procedimento de emergência definido e conhecido': 'Elabore plano de resgate e treine equipe.',
        'Tripé de resgate e cabo de segurança instalados': 'Adquira tripé certificado e teste antes do uso.'
      },
      maquinas: {
        'Máquina bloqueada e etiquetada (LOTO)': 'Implemente sistema LOTO específico para cada máquina.',
        'Proteções e dispositivos de segurança instalados': 'Instale grades e cortinas de luz.',
        'Treinamento específico na máquina realizado': 'Documente treinamentos e renove periodicamente.',
        'Procedimento operacional conhecido e seguido': 'Crie manual operacional ilustrado.',
        'Área de trabalho sinalizada e isolada': 'Use cones, fitas e placas de sinalização.',
        'Verificar funcionamento de botões de emergência': 'Teste botões semanalmente.',
        'Inspeção de cabos, correias e componentes móveis': 'Crie checklist e substitua itens desgastados.',
        'Ferramentas adequadas e em bom estado': 'Mantenha inventário atualizado.',
        'Verificar pressão de sistemas pneumáticos/hidráulicos': 'Use manômetros calibrados.'
      },
      quimicos: {
        'FISPQ consultada e compreendida': 'Mantenha FISPQs atualizadas e acessíveis.',
        'EPIs específicos utilizados (respirador, luvas químicas)': 'Forneça EPIs adequados ao produto químico.',
        'Área com ventilação adequada': 'Instale sistema de exaustão localizada.',
        'Kit de emergência química disponível': 'Tenha material absorvente e neutralizantes.',
        'Chuveiro e lava-olhos próximos e funcionando': 'Instale a máximo 15 metros e teste semanalmente.',
        'Produtos incompatíveis separados adequadamente': 'Use tabela de incompatibilidade.',
        'Contenções secundárias instaladas': 'Instale bandejas coletoras.',
        'Sinalização de riscos químicos visível': 'Use pictogramas GHS.',
        'Medidor de gases/vapores calibrado disponível': 'Adquira detector específico.',
        'Procedimento de descarte definido': 'Contrate empresa licenciada.'
      },
      altura: {
        'Análise preliminar de risco (APR) elaborada': 'Elabore APR específica para cada trabalho.',
        'Sistema de proteção contra quedas instalado': 'Instale linhas de vida certificadas.',
        'Treinamento NR-35 válido (menos de 2 anos)': 'Contrate instrutor certificado.',
        'Condições climáticas favoráveis (vento < 40 km/h)': 'Use anemômetro para medir vento.',
        'Cinto de segurança tipo paraquedista verificado': 'Inspecione costuras e fivelas.',
        'Pontos de ancoragem certificados e inspecionados': 'Contrate engenheiro para certificação.',
        'Linha de vida ou trava-quedas em uso': 'Adquira equipamentos certificados.',
        'Andaimes inspecionados e liberados': 'Contrate profissional qualificado.',
        'Área inferior isolada e sinalizada': 'Demarque perímetro de segurança.',
        'Plano de resgate elaborado e conhecido': 'Elabore procedimento específico.'
      },
      incendio: {
        'Extintores adequados verificados e dentro da validade': 'Inspecione extintores mensalmente.',
        'Rotas de fuga desobstruídas e sinalizadas': 'Mantenha corredores livres.',
        'Sistema de alarme testado e funcionando': 'Teste alarmes mensalmente.',
        'Materiais inflamáveis controlados e segregados': 'Use armários corta-fogo.',
        'Permissão de trabalho a quente válida': 'Elabore permissão específica.',
        'Hidrantes próximos testados e acessíveis': 'Teste pressão e vazão.',
        'Equipamentos elétricos à prova de explosão': 'Use equipamentos certificados.',
        'Vigia contra incêndio posicionado': 'Designe pessoa treinada.',
        'Procedimento de emergência conhecido': 'Treine brigada de incêndio.',
        'Comunicação com brigada de incêndio estabelecida': 'Mantenha rádios funcionando.'
      }
    };
    
    return problemItems.map(item => ({
      problem: item.text,
      status: item.status,
      solution: insights[riskType][item.text] || 'Consulte especialista para orientações específicas.'
    }));
  };

  const getAllInsights = () => {
    const allInsights = [];
    Object.keys(checklistData).forEach(riskType => {
      const riskInsights = getInsights(riskType);
      if (riskInsights.length > 0) {
        allInsights.push({
          risk: riskType,
          label: riskLabels[riskType],
          insights: riskInsights
        });
      }
    });
    return allInsights;
  };

  const RadarChart = () => {
    const risks = Object.keys(checklistData);
    const center = 140;
    const maxRadius = 100;
    
    const angleStep = (2 * Math.PI) / risks.length;
    
    const getPoint = (angle, radius) => ({
      x: center + radius * Math.cos(angle - Math.PI / 2),
      y: center + radius * Math.sin(angle - Math.PI / 2)
    });

    const gridLines = [20, 40, 60, 80, 100].map(percentage => {
      const radius = (percentage / 100) * maxRadius;
      const points = risks.map((_, index) => {
        const angle = index * angleStep;
        return getPoint(angle, radius);
      });
      
      return (
        <polygon
          key={percentage}
          points={points.map(p => `${p.x},${p.y}`).join(' ')}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="1"
        />
      );
    });

    const dataPoints = risks.map((risk, index) => {
      const angle = index * angleStep;
      const percentage = getCompletionPercentage(risk);
      const radius = (percentage / 100) * maxRadius;
      return getPoint(angle, radius);
    });

    const axisLines = risks.map((risk, index) => {
      const angle = index * angleStep;
      const endPoint = getPoint(angle, maxRadius);
      const IconComponent = RiskIcons[risk];
      const labelPoint = getPoint(angle, maxRadius + 25);
      
      return (
        <g key={risk}>
          <line
            x1={center}
            y1={center}
            x2={endPoint.x}
            y2={endPoint.y}
            stroke="#d1d5db"
            strokeWidth="1"
          />
          <g transform={`translate(${labelPoint.x - 8}, ${labelPoint.y - 8})`}>
            <circle cx="8" cy="8" r="10" fill="white" stroke="#e5e7eb"/>
            <g transform="translate(2, 2)">
              <IconComponent size="w-4 h-4" />
            </g>
          </g>
          <text
            x={labelPoint.x}
            y={labelPoint.y + 25}
            textAnchor="middle"
            className="text-xs font-medium fill-gray-700"
          >
            {riskLabels[risk]}
          </text>
        </g>
      );
    });

    return (
      <div className="flex justify-center">
        <svg width="300" height="320" className="overflow-visible">
          {gridLines}
          {axisLines}
          <polygon
            points={dataPoints.map(p => `${p.x},${p.y}`).join(' ')}
            fill="rgba(59, 130, 246, 0.3)"
            stroke="#3b82f6"
            strokeWidth="2"
          />
          {dataPoints.map((point, index) => (
            <circle
              key={index}
              cx={point.x}
              cy={point.y}
              r="3"
              fill="#3b82f6"
            />
          ))}
          {[20, 40, 60, 80, 100].map(percentage => (
            <text
              key={percentage}
              x={center + 5}
              y={center - (percentage / 100) * maxRadius}
              className="text-xs fill-gray-500"
            >
              {percentage}%
            </text>
          ))}
        </svg>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6">
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <AlertTriangle className="w-8 h-8" />
            Sistema de Gestão de Riscos
          </h1>
          <p className="mt-2 opacity-90">Checklist integrado e monitoramento visual</p>
        </div>

        <div className="flex border-b overflow-x-auto">
          {Object.keys(riskLabels).map((risk) => {
            const IconComponent = RiskIcons[risk];
            return (
              <button
                key={risk}
                onClick={() => setActiveTab(risk)}
                className={`flex items-center gap-2 px-4 py-3 font-medium transition-colors whitespace-nowrap ${
                  activeTab === risk
                    ? 'border-b-2 border-blue-500 text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                <div style={{width: '16px', height: '16px'}}>
                  <IconComponent size="w-4 h-4" />
                </div>
                <span className="hidden sm:inline">{riskLabels[risk]}</span>
              </button>
            );
          })}
          <button
            onClick={() => setActiveTab('checklist')}
            className={`flex items-center gap-2 px-4 py-3 font-medium transition-colors whitespace-nowrap ${
              activeTab === 'checklist'
                ? 'border-b-2 border-blue-500 text-blue-600 bg-blue-50'
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
            }`}
          >
            📋 Checklist
          </button>
          <button
            onClick={() => setActiveTab('radar')}
            className={`flex items-center gap-2 px-4 py-3 font-medium transition-colors whitespace-nowrap ${
              activeTab === 'radar'
                ? 'border-b-2 border-blue-500 text-blue-600 bg-blue-50'
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
            }`}
          >
            📊 Radar
          </button>
          <button
            onClick={() => setActiveTab('insights')}
            className={`flex items-center gap-2 px-4 py-3 font-medium transition-colors whitespace-nowrap ${
              activeTab === 'insights'
                ? 'border-b-2 border-blue-500 text-blue-600 bg-blue-50'
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
            }`}
          >
            💡 Insights
          </button>
        </div>

        <div className="p-6">
          {activeTab === 'checklist' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Checklist Completo de Segurança</h2>
                <button
                  onClick={() => setActiveTab('radar')}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 font-medium"
                >
                  📊 Ver Radar de Riscos
                </button>
              </div>
              {Object.entries(checklistData).map(([riskType, data]) => {
                const IconComponent = RiskIcons[riskType];
                const isExpanded = expandedSections[riskType];
                const completionPercentage = getCompletionPercentage(riskType);
                
                return (
                  <div key={riskType} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleSection(riskType)}
                      className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 flex items-center justify-between transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div style={{width: '16px', height: '16px'}}>
                          <IconComponent size="w-4 h-4" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800">
                          {riskLabels[riskType]}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          completionPercentage === 100 
                            ? 'bg-green-100 text-green-800' 
                            : completionPercentage > 50 
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {completionPercentage}% completo
                        </span>
                      </div>
                      {isExpanded ? <ChevronUp /> : <ChevronDown />}
                    </button>
                    
                    {isExpanded && (
                      <div className="p-6 bg-white">
                        <div className="space-y-3">
                          {data.items.map((item) => (
                            <div key={item.id} className="p-4 bg-white rounded-lg border border-gray-200">
                              <div className="flex flex-col gap-3">
                                <span className="text-gray-700 font-medium">{item.text}</span>
                                <div className="flex gap-2 flex-wrap">
                                  {[
                                    { value: 'sim', label: 'Sim', color: 'bg-green-100 text-green-800 border-green-300' },
                                    { value: 'nao', label: 'Não', color: 'bg-red-100 text-red-800 border-red-300' },
                                    { value: 'na', label: 'N/A', color: 'bg-gray-100 text-gray-800 border-gray-300' },
                                    { value: 'parcial', label: 'Parcial', color: 'bg-yellow-100 text-yellow-800 border-yellow-300' }
                                  ].map((option) => (
                                    <button
                                      key={option.value}
                                      onClick={() => handleStatusChange(riskType, item.id, option.value)}
                                      className={`px-3 py-1 rounded-lg border-2 font-medium transition-all ${
                                        item.status === option.value
                                          ? option.color + ' ring-2 ring-offset-1'
                                          : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
                                      }`}
                                    >
                                      {option.label}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {activeTab === 'radar' && (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Monitoramento Visual de Riscos</h2>
              <RadarChart />
              <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(checklistData).map(([riskType, data]) => {
                  const IconComponent = RiskIcons[riskType];
                  const percentage = getCompletionPercentage(riskType);
                  
                  return (
                    <div key={riskType} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div style={{width: '16px', height: '16px'}}>
                          <IconComponent size="w-4 h-4" />
                        </div>
                        <span className="font-medium text-sm">{riskLabels[riskType]}</span>
                      </div>
                      <div className="text-2xl font-bold text-blue-600">{percentage}%</div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'insights' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">💡 Insights e Soluções</h2>
              <div className="space-y-6">
                {getAllInsights().map((riskInsight) => {
                  const IconComponent = RiskIcons[riskInsight.risk];
                  return (
                    <div key={riskInsight.risk} className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div style={{width: '16px', height: '16px'}}>
                          <IconComponent size="w-4 h-4" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">{riskInsight.label}</h3>
                        <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                          {riskInsight.insights.length} item(s) para melhorar
                        </span>
                      </div>
                      <div className="space-y-4">
                        {riskInsight.insights.map((insight, index) => (
                          <div key={index} className="bg-white p-4 rounded-lg border border-amber-100">
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                              <div className="flex-1">
                                <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                                  {insight.status === 'nao' && <span className="text-red-600">❌</span>}
                                  {insight.status === 'parcial' && <span className="text-yellow-600">⚠️</span>}
                                  {insight.problem}
                                </h4>
                                <p className="text-gray-700 bg-green-50 p-3 rounded border-l-4 border-green-400">
                                  <span className="font-medium text-green-800">💡 Solução:</span> {insight.solution}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
                {getAllInsights().length === 0 && (
                  <div className="text-center py-12 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-6xl mb-4">✅</div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Parabéns!</h3>
                    <p className="text-green-700">Todos os itens de segurança foram verificados. Seu ambiente está protegido!</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {Object.keys(riskLabels).includes(activeTab) && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div style={{width: '20px', height: '20px'}}>
                  {React.createElement(RiskIcons[activeTab], {size: 'w-5 h-5'})}
                </div>
                <h2 className="text-2xl font-bold text-gray-800">{riskLabels[activeTab]}</h2>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  getCompletionPercentage(activeTab) === 100 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {getCompletionPercentage(activeTab)}% completo
                </span>
              </div>
              
              <div className="space-y-3">
                {checklistData[activeTab].items.map((item) => (
                  <div key={item.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex flex-col gap-3">
                      <span className="text-gray-700 font-medium">{item.text}</span>
                      <div className="flex gap-2 flex-wrap">
                        {[
                          { value: 'sim', label: 'Sim', color: 'bg-green-100 text-green-800 border-green-300' },
                          { value: 'nao', label: 'Não', color: 'bg-red-100 text-red-800 border-red-300' },
                          { value: 'na', label: 'N/A', color: 'bg-gray-100 text-gray-800 border-gray-300' },
                          { value: 'parcial', label: 'Parcial', color: 'bg-yellow-100 text-yellow-800 border-yellow-300' }
                        ].map((option) => (
                          <button
                            key={option.value}
                            onClick={() => handleStatusChange(activeTab, item.id, option.value)}
                            className={`px-3 py-1 rounded-lg border-2 font-medium transition-all ${
                              item.status === option.value
                                ? option.color + ' ring-2 ring-offset-1'
                                : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RiskManagementApp;
