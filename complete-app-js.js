            <div className={`relative ${dominantLevel === 'calculative' ? 'ring-4 ring-yellow-400' : ''}`}>
              <div className="bg-orange-500 p-4 rounded-lg relative">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white">CALCULATIVO</h4>
                    <p className="text-sm text-orange-100 italic">Nós temos sistemas para gerenciar todos os perigos</p>
                    <p className="text-xs text-orange-100 mt-1">Nós temos sistemas para gerenciar todos os perigos que conseguimos pensar</p>
                  </div>
                  <div className="text-3xl font-bold text-white ml-4">{scores.calculative}</div>
                </div>
                {dominantLevel === 'calculative' && (
                  <div className="absolute -right-12 top-1/2 transform -translate-y-1/2">
                    <div className="bg-yellow-400 text-black px-3 py-1 rounded-r-lg text-sm font-bold whitespace-nowrap">
                      SUA CULTURA
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Reativo */}
            <div className={`relative ${dominantLevel === 'reactive' ? 'ring-4 ring-yellow-400' : ''}`}>
              <div className="bg-red-600 p-4 rounded-lg relative">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white">REATIVO</h4>
                    <p className="text-sm text-red-100 italic">Quem está me vigiando?</p>
                    <p className="text-xs text-red-100 mt-1">Fazemos muito pouco até que ocorram acidentes, sendo então que tomamos medidas</p>
                  </div>
                  <div className="text-3xl font-bold text-white ml-4">{scores.reactive}</div>
                </div>
                {dominantLevel === 'reactive' && (
                  <div className="absolute -right-12 top-1/2 transform -translate-y-1/2">
                    <div className="bg-yellow-400 text-black px-3 py-1 rounded-r-lg text-sm font-bold whitespace-nowrap">
                      SUA CULTURA
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Pathological level indicator - exactly like original */}
          <div className="text-center mt-6 border-t border-gray-600 pt-4">
            <div className="text-gray-400 text-sm">
              <span className="font-bold">PATOLÓGICO</span><br/>
              <span className="text-xs">Quem se importa, desde que não sejamos pegos</span>
            </div>
          </div>

          {/* Results summary */}
          <div className="mt-8 text-center relative z-10">
            <div className="inline-block px-8 py-4 rounded-xl font-bold text-xl bg-yellow-400 text-black">
              Cultura Dominante: {dominantLevel.toUpperCase()}
            </div>
            <div className="mt-2 text-sm text-gray-300">
              {Object.values(heartsAnswers).filter(a => a === 'na').length > 0 && (
                <p>* {Object.values(heartsAnswers).filter(a => a === 'na').length} questões marcadas como Não Aplicável foram excluídas da pontuação</p>
              )}
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
            <h4 className="font-bold text-lg mb-3 text-gray-800">Características da Cultura Atual:</h4>
            {dominantLevel === 'reactive' && (
              <div>
                <p className="mb-2"><strong>Estágio Reativo:</strong> A segurança é impulsionada pela evitação de acidentes e conformidade regulatória.</p>
                <p><strong>Próximos Passos:</strong> Desenvolver consciência sobre segurança, estabelecer sistemas básicos de gestão e construir comprometimento da liderança.</p>
              </div>
            )}
            {dominantLevel === 'calculative' && (
              <div>
                <p className="mb-2"><strong>Estágio Calculativo:</strong> Decisões de segurança baseadas em análise de custo-benefício e sistemas estruturados.</p>
                <p><strong>Próximos Passos:</strong> Trabalhar no desenvolvimento de motivação intrínseca para segurança e valores compartilhados.</p>
              </div>
            )}
            {dominantLevel === 'proactive' && (
              <div>
                <p className="mb-2"><strong>Estágio Proativo:</strong> As pessoas acreditam em fazer a coisa certa por segurança, guiadas por valores.</p>
                <p><strong>Próximos Passos:</strong> Continuar construindo sobre estes valores positivos e integrar segurança em todos os processos.</p>
              </div>
            )}
            {dominantLevel === 'generative' && (
              <div>
                <p className="mb-2"><strong>Estágio Generativo:</strong> A segurança é integral à forma como vocês fazem negócios.</p>
                <p><strong>Próximos Passos:</strong> Manter esta excelência e compartilhar aprendizados com outros na indústria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderMaturityResults = () => {
    const score = calculateMaturityScore();
    const level = getMaturityLevel(score);
    
    return (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-center mb-6">Safety Culture Maturity Results</h3>
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="text-center mb-4">
            <div className={`inline-block px-6 py-3 rounded-full text-white font-bold ${level.color}`}>
              {level.level}
            </div>
            <p className="text-lg mt-2">Maturity Score: {score.toFixed(1)}%</p>
            <div className="mt-2 text-sm text-gray-600">
              {Object.values(maturityAnswers).filter(a => a === 'na').length > 0 && (
                <p>* {Object.values(maturityAnswers).filter(a => a === 'na').length} questions marked as Not Applicable were excluded from scoring</p>
              )}
            </div>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
            <div 
              className={`h-4 rounded-full ${level.color}`}
              style={{ width: `${score}%` }}
            />
          </div>
          
          <div className="grid grid-cols-5 gap-2 text-xs text-center mb-6">
            <div className="bg-red-500 text-white p-2 rounded">Pathological</div>
            <div className="bg-orange-500 text-white p-2 rounded">Emerging</div>
            <div className="bg-yellow-500 text-white p-2 rounded">Developing</div>
            <div className="bg-blue-500 text-white p-2 rounded">Managing</div>
            <div className="bg-green-600 text-white p-2 rounded">Improving</div>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-bold mb-2">Next Steps:</h4>
            {score < 20 && (
              <p>Establish basic safety management systems and leadership commitment. Focus on fundamental safety practices.</p>
            )}
            {score >= 20 && score < 40 && (
              <p>Develop systematic approaches to safety management. Improve training and communication systems.</p>
            )}
            {score >= 40 && score < 60 && (
              <p>Enhance employee engagement and participation. Implement more proactive safety measures.</p>
            )}
            {score >= 60 && score < 80 && (
              <p>Focus on integration and consistency across all operations. Develop advanced safety leadership capabilities.</p>
            )}
            {score >= 80 && (
              <p>Maintain excellence through continuous innovation and learning. Share best practices with industry peers.</p>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderAssessment = (questions, answers, methodology, title) => {
    const totalQuestions = questions.length;
    const answeredCount = Object.keys(answers).length;
    const showResults = answeredCount === totalQuestions;

    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4 mb-6">
          <button 
            onClick={() => setCurrentScreen('home')}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <ChevronLeft size={20} />
            Back to Menu
          </button>
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Progress</span>
            <span className="text-sm text-gray-600">{answeredCount}/{totalQuestions}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
            />
          </div>
        </div>

        {!showResults ? (
          <div className="space-y-4">
            {questions.map((question) => (
              <div key={question.id} className="bg-white p-6 rounded-lg shadow-sm border">
                <p className="text-lg mb-4">{question.text}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <button
                    onClick={() => handleAnswer(question.id, 'yes', methodology)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all ${
                      answers[question.id] === 'yes'
                        ? 'bg-green-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-green-100 border border-gray-200'
                    }`}
                  >
                    <CheckCircle size={18} />
                    <span className="text-sm">Yes</span>
                  </button>
                  <button
                    onClick={() => handleAnswer(question.id, 'partial', methodology)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all ${
                      answers[question.id] === 'partial'
                        ? 'bg-yellow-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-yellow-100 border border-gray-200'
                    }`}
                  >
                    <div className="w-4 h-4 border-2 border-current rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-current rounded-full"></div>
                    </div>
                    <span className="text-sm">Partial</span>
                  </button>
                  <button
                    onClick={() => handleAnswer(question.id, 'no', methodology)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all ${
                      answers[question.id] === 'no'
                        ? 'bg-red-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-red-100 border border-gray-200'
                    }`}
                  >
                    <XCircle size={18} />
                    <span className="text-sm">No</span>
                  </button>
                  <button
                    onClick={() => handleAnswer(question.id, 'na', methodology)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all ${
                      answers[question.id] === 'na'
                        ? 'bg-gray-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                    }`}
                  >
                    <div className="w-4 h-4 border-2 border-current rounded-full flex items-center justify-center">
                      <div className="w-1 h-1 bg-current rounded-full"></div>
                    </div>
                    <span className="text-sm">N/A</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {methodology === 'bradley' && renderBradleyResults()}
            {methodology === 'hearts' && renderHeartsResults()}
            {methodology === 'maturity' && renderMaturityResults()}
            
            <div className="text-center mt-8">
              <button
                onClick={() => setCurrentScreen('home')}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Take Another Assessment
              </button>
            </div>
          </>
        )}
      </div>
    );
  };

  if (currentScreen === 'bradley') {
    return renderAssessment(bradleyQuestions, bradleyAnswers, 'bradley', 'DuPont Bradley Curve Assessment');
  }

  if (currentScreen === 'hearts') {
    return renderAssessment(heartsQuestions, heartsAnswers, 'hearts', 'Hearts and Minds Assessment');
  }

  if (currentScreen === 'maturity') {
    return renderAssessment(maturityQuestions, maturityAnswers, 'maturity', 'Safety Culture Maturity Assessment');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Shield className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Avaliação de Cultura de Segurança</h1>
          <p className="text-lg text-gray-600">Escolha sua metodologia de avaliação preferida para avaliar a maturidade da cultura de segurança da sua organização</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Bradley Curve Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
               onClick={() => setCurrentScreen('bradley')}>
            <div className="bg-gradient-to-r from-red-500 to-green-500 h-2"></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg width="32" height="32" viewBox="0 0 32 32" className="text-blue-600">
                    <defs>
                      <linearGradient id="bradleyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#dc2626" />
                        <stop offset="33%" stopColor="#ea580c" />
                        <stop offset="66%" stopColor="#ca8a04" />
                        <stop offset="100%" stopColor="#16a34a" />
                      </linearGradient>
                    </defs>
                    <path d="M 4 24 Q 8 16 16 12 Q 24 8 28 4" stroke="url(#bradleyGradient)" strokeWidth="3" fill="none" strokeLinecap="round"/>
                    <path d="M 26 6 L 28 4 L 26 2" stroke="url(#bradleyGradient)" strokeWidth="2" fill="none" strokeLinecap="round"/>
                    <polygon points="16,2 20,8 16,14 12,8" fill="currentColor" opacity="0.3"/>
                    <circle cx="6" cy="22" r="1.5" fill="#dc2626"/>
                    <circle cx="12" cy="16" r="1.5" fill="#ea580c"/>
                    <circle cx="20" cy="10" r="1.5" fill="#ca8a04"/>
                    <circle cx="26" cy="6" r="1.5" fill="#16a34a"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">DuPont Bradley Curve</h3>
                  <p className="text-sm text-gray-500">Est. 1995</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Avalie a jornada da sua organização desde a cultura reativa até a interdependente baseada no modelo clássico da DuPont.
              </p>
              <div className="flex justify-between text-xs text-gray-500 mb-4">
                <span>Reativo → Dependente → Independente → Interdependente</span>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium group-hover:bg-blue-700 transition-colors">
                Iniciar Avaliação
              </button>
            </div>
          </div>

          {/* Hearts and Minds Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
               onClick={() => setCurrentScreen('hearts')}>
            <div className="bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 to-green-500 h-2"></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <svg width="32" height="32" viewBox="0 0 32 32" className="text-red-600">
                    <defs>
                      <linearGradient id="heartsGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#dc2626" />
                        <stop offset="33%" stopColor="#ea580c" />
                        <stop offset="66%" stopColor="#ca8a04" />
                        <stop offset="100%" stopColor="#16a34a" />
                      </linearGradient>
                    </defs>
                    <path d="M16,28 C16,28 5,19 5,12 C5,8 8,5 12,5 C14,5 16,7 16,7 C16,7 18,5 20,5 C24,5 27,8 27,12 C27,19 16,28 16,28 Z" 
                          fill="currentColor" opacity="0.7"/>
                    <path d="M16,4 C20,4 23,7 23,11 C23,12 22,13 21,13 C22,14 22,15 21,16 C22,17 22,18 21,19 C20,20 18,20 16,20 C14,20 12,20 11,19 C10,18 10,17 11,16 C10,15 10,14 11,13 C10,13 9,12 9,11 C9,7 12,4 16,4 Z" 
                          fill="url(#heartsGradient)" opacity="0.8"/>
                    <rect x="2" y="26" width="6" height="1" fill="currentColor" opacity="0.5"/>
                    <rect x="4" y="22" width="6" height="1" fill="currentColor" opacity="0.6"/>
                    <rect x="6" y="18" width="6" height="1" fill="currentColor" opacity="0.7"/>
                    <rect x="8" y="14" width="6" height="1" fill="currentColor" opacity="0.8"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Hearts and Minds</h3>
                  <p className="text-sm text-gray-500">Shell/Energy Institute</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Avalie a cultura de segurança através do modelo Hearts and Minds, focando nas atitudes e motivações por trás dos comportamentos.
              </p>
              <div className="flex justify-between text-xs text-gray-500 mb-4">
                <span>Reativo → Calculativo → Proativo → Generativo</span>
              </div>
              <button className="w-full bg-red-600 text-white py-3 rounded-lg font-medium group-hover:bg-red-700 transition-colors">
                Iniciar Avaliação
              </button>
            </div>
          </div>

          {/* Culture Maturity Model Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
               onClick={() => setCurrentScreen('maturity')}>
            <div className="bg-gradient-to-r from-gray-400 to-green-600 h-2"></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <svg width="32" height="32" viewBox="0 0 32 32" className="text-green-600">
                    <defs>
                      <linearGradient id="maturityGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#6b7280" />
                        <stop offset="25%" stopColor="#f97316" />
                        <stop offset="50%" stopColor="#eab308" />
                        <stop offset="75%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#16a34a" />
                      </linearGradient>
                    </defs>
                    <rect x="6" y="24" width="20" height="2" fill="#6b7280"/>
                    <rect x="8" y="20" width="16" height="2" fill="#f97316"/>
                    <rect x="10" y="16" width="12" height="2" fill="#eab308"/>
                    <rect x="12" y="12" width="8" height="2" fill="#3b82f6"/>
                    <rect x="14" y="8" width="4" height="2" fill="#16a34a"/>
                    
                    <rect x="4" y="6" width="2" height="20" fill="currentColor" opacity="0.3"/>
                    <rect x="26" y="6" width="2" height="20" fill="currentColor" opacity="0.3"/>
                    
                    <polygon points="16,2 18,6 14,6" fill="currentColor"/>
                    <circle cx="16" cy="4" r="2" fill="none" stroke="currentColor" strokeWidth="1"/>
                    
                    <circle cx="7" cy="25" r="1" fill="white"/>
                    <circle cx="9" cy="21" r="1" fill="white"/>
                    <circle cx="11" cy="17" r="1" fill="white"/>
                    <circle cx="13" cy="13" r="1" fill="white"/>
                    <circle cx="15" cy="9" r="1" fill="white"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Modelo de Maturidade</h3>
                  <p className="text-sm text-gray-500">Hudson-Parker</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Avaliação abrangente da maturidade da cultura de segurança através de múltiplas dimensões organizacionais e capacidades.
              </p>
              <div className="flex justify-between text-xs text-gray-500 mb-4">
                <span>Patológico → Emergente → Desenvolvendo → Gerenciando → Melhorando</span>
              </div>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium group-hover:bg-green-700 transition-colors">
                Iniciar Avaliação
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Sobre Estas Metodologias</h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
            <div className="border-l-4 border-blue-500 pl-4">
              <div className="flex items-center mb-2">
                <svg width="20" height="20" viewBox="0 0 32 32" className="text-blue-600 mr-2">
                  <path d="M 4 24 Q 8 16 16 12 Q 24 8 28 4" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <polygon points="16,2 20,8 16,14 12,8" fill="currentColor" opacity="0.3"/>
                </svg>
                <h4 className="font-semibold text-gray-800">DuPont Bradley Curve</h4>
              </div>
              <p className="mb-2"><strong>Origem:</strong> Desenvolvida por Berlin Bradley (DuPont) em 1995</p>
              <p><strong>Foco:</strong> Progressão da conformidade reativa para cultura de segurança interdependente proativa. Baseado na evolução de comportamentos e motivações de segurança.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <div className="flex items-center mb-2">
                <svg width="20" height="20" viewBox="0 0 32 32" className="text-red-600 mr-2">
                  <path d="M16,28 C16,28 5,19 5,12 C5,8 8,5 12,5 C14,5 16,7 16,7 C16,7 18,5 20,5 C24,5 27,8 27,12 C27,19 16,28 16,28 Z" fill="currentColor" opacity="0.5"/>
                  <circle cx="16" cy="10" r="6" fill="none" stroke="currentColor" strokeWidth="1"/>
                </svg>
                <h4 className="font-semibold text-gray-800">Hearts and Minds</h4>
              </div>
              <p className="mb-2"><strong>Origem:</strong> Shell/Energy Institute - Universidades de Leiden, Manchester e Aberdeen</p>
              <p><strong>Foco:</strong> Compreender as atitudes e motivações subjacentes que impulsionam comportamentos de segurança. "Conquistar corações e mentes" para trabalhar com segurança.</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <div className="flex items-center mb-2">
                <svg width="20" height="20" viewBox="0 0 32 32" className="text-green-600 mr-2">
                  <rect x="6" y="20" width="20" height="2" fill="currentColor" opacity="0.3"/>
                  <rect x="8" y="16" width="16" height="2" fill="currentColor" opacity="0.5"/>
                  <rect x="10" y="12" width="12" height="2" fill="currentColor" opacity="0.7"/>
                  <rect x="12" y="8" width="8" height="2" fill="currentColor" opacity="0.9"/>
                  <polygon points="16,2 18,6 14,6" fill="currentColor"/>
                </svg>
                <h4 className="font-semibold text-gray-800">Modelo de Maturidade</h4>
              </div>
              <p className="mb-2"><strong>Origem:</strong> Hudson-Parker, baseado no trabalho de Westrum e desenvolvido pelo Keil Centre</p>
              <p><strong>Foco:</strong> Avaliação abrangente da maturidade da cultura de segurança através de múltiplas dimensões organizacionais e capacidades sistêmicas.</p>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">💡 Dica Profissional:</h4>
            <p className="text-sm text-gray-700">
              Cada metodologia oferece uma perspectiva única da cultura de segurança. O DuPont Bradley Curve foca na evolução comportamental, 
              Hearts and Minds nas motivações psicológicas, e o Modelo de Maturidade na capacidade sistêmica organizacional. 
              Para uma avaliação completa, considere usar múltiplas metodologias.
            </p>
          import React, { useState } from 'react';
import { ChevronLeft, Shield, CheckCircle, XCircle } from 'lucide-react';

const SafetyCultureApp = () => {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [bradleyAnswers, setBradleyAnswers] = useState({});
  const [heartsAnswers, setHeartsAnswers] = useState({});
  const [maturityAnswers, setMaturityAnswers] = useState({});

  // Bradley Curve Assessment Questions
  const bradleyQuestions = [
    { id: 1, text: "Management actively demonstrates safety leadership through visible actions", category: "leadership" },
    { id: 2, text: "Employees follow safety rules because they want to, not just because they have to", category: "motivation" },
    { id: 3, text: "Safety incidents are reported without fear of blame or punishment", category: "culture" },
    { id: 4, text: "Teams proactively identify and address safety risks together", category: "teamwork" },
    { id: 5, text: "Safety procedures are regularly reviewed and improved based on employee input", category: "improvement" },
    { id: 6, text: "Employees feel empowered to stop work when they see unsafe conditions", category: "empowerment" },
    { id: 7, text: "Safety performance is measured beyond just injury rates", category: "metrics" },
    { id: 8, text: "There's open communication about safety concerns at all levels", category: "communication" },
    { id: 9, text: "Employees actively look out for each other's safety", category: "care" },
    { id: 10, text: "Safety is integrated into all business decisions and processes", category: "integration" }
  ];

  // Hearts and Minds Questions
  const heartsQuestions = [
    { id: 1, text: "People see safety rules as bureaucratic obstacles to getting work done", category: "reactive" },
    { id: 2, text: "Safety is driven primarily by compliance and avoiding penalties", category: "reactive" },
    { id: 3, text: "Employees calculate risks and benefits before following safety procedures", category: "calculative" },
    { id: 4, text: "Safety decisions are based on cost-benefit analysis", category: "calculative" },
    { id: 5, text: "People follow safety rules because they believe it's the right thing to do", category: "proactive" },
    { id: 6, text: "Safety values are shared and practiced consistently across the organization", category: "proactive" },
    { id: 7, text: "Safety is 'just how we do business' - it's part of our DNA", category: "generative" },
    { id: 8, text: "The organization continuously seeks new ways to improve safety", category: "generative" },
    { id: 9, text: "Safety thinking is applied to all aspects of the business", category: "generative" },
    { id: 10, text: "People feel personal responsibility for overall organizational safety", category: "generative" }
  ];

  // Safety Culture Maturity Model Questions
  const maturityQuestions = [
    { id: 1, text: "Leadership provides adequate resources for safety programs", category: "leadership" },
    { id: 2, text: "There are clear safety roles and responsibilities at all levels", category: "organization" },
    { id: 3, text: "Safety training is comprehensive and regularly updated", category: "competence" },
    { id: 4, text: "Risk assessments are thorough and regularly reviewed", category: "risk" },
    { id: 5, text: "There's effective two-way safety communication", category: "communication" },
    { id: 6, text: "Safety performance is regularly monitored and analyzed", category: "monitoring" },
    { id: 7, text: "Lessons learned from incidents are effectively shared", category: "learning" },
    { id: 8, text: "Safety management systems are well-integrated", category: "systems" },
    { id: 9, text: "Contractors and suppliers meet our safety standards", category: "partnerships" },
    { id: 10, text: "Safety culture assessment is conducted regularly", category: "assessment" }
  ];

  const calculateBradleyScore = () => {
    const totalAnswers = Object.keys(bradleyAnswers).length;
    if (totalAnswers === 0) return 0;
    
    let totalScore = 0;
    let validAnswers = 0;
    
    Object.values(bradleyAnswers).forEach(answer => {
      if (answer !== 'na') {
        validAnswers++;
        if (answer === 'yes') totalScore += 100;
        else if (answer === 'partial') totalScore += 50;
      }
    });
    
    return validAnswers > 0 ? totalScore / validAnswers : 0;
  };

  const getBradleyLevel = (score) => {
    if (score >= 80) return { level: 'Interdependent', color: 'bg-green-500', stage: 4 };
    if (score >= 60) return { level: 'Independent', color: 'bg-yellow-500', stage: 3 };
    if (score >= 40) return { level: 'Dependent', color: 'bg-orange-500', stage: 2 };
    return { level: 'Reactive', color: 'bg-red-500', stage: 1 };
  };

  const calculateHeartsScore = () => {
    const answers = Object.values(heartsAnswers);
    if (answers.length === 0) return { reactive: 0, calculative: 0, proactive: 0, generative: 0 };
    
    const categories = { reactive: 0, calculative: 0, proactive: 0, generative: 0 };
    
    heartsQuestions.forEach(q => {
      const answer = heartsAnswers[q.id];
      if (answer === 'yes') {
        categories[q.category] += 100;
      } else if (answer === 'partial') {
        categories[q.category] += 50;
      }
    });
    
    return categories;
  };

  const getHeartsLevel = () => {
    const scores = calculateHeartsScore();
    const maxScore = Math.max(...Object.values(scores));
    const dominantLevel = Object.keys(scores).find(key => scores[key] === maxScore);
    return dominantLevel || 'reactive';
  };

  const calculateMaturityScore = () => {
    const totalAnswers = Object.keys(maturityAnswers).length;
    if (totalAnswers === 0) return 0;
    
    let totalScore = 0;
    let validAnswers = 0;
    
    Object.values(maturityAnswers).forEach(answer => {
      if (answer !== 'na') {
        validAnswers++;
        if (answer === 'yes') totalScore += 100;
        else if (answer === 'partial') totalScore += 50;
      }
    });
    
    return validAnswers > 0 ? totalScore / validAnswers : 0;
  };

  const getMaturityLevel = (score) => {
    if (score >= 80) return { level: 'Continually Improving', color: 'bg-green-600' };
    if (score >= 60) return { level: 'Managing', color: 'bg-blue-500' };
    if (score >= 40) return { level: 'Developing', color: 'bg-yellow-500' };
    if (score >= 20) return { level: 'Emerging', color: 'bg-orange-500' };
    return { level: 'Pathological', color: 'bg-red-500' };
  };

  const handleAnswer = (questionId, answer, methodology) => {
    if (methodology === 'bradley') {
      setBradleyAnswers(prev => ({ ...prev, [questionId]: answer }));
    } else if (methodology === 'hearts') {
      setHeartsAnswers(prev => ({ ...prev, [questionId]: answer }));
    } else if (methodology === 'maturity') {
      setMaturityAnswers(prev => ({ ...prev, [questionId]: answer }));
    }
  };

  const renderBradleyResults = () => {
    const score = calculateBradleyScore();
    const level = getBradleyLevel(score);
    
    return (
      <div className="space-y-6">
        <h3 className="text-3xl font-bold text-center mb-8 text-gray-800 bg-yellow-400 py-2">DuPont Bradley Curve</h3>
        
        <div className="bg-white p-8 rounded-xl shadow-xl">
          {/* Bradley Curve Visual - Exact replica */}
          <div className="relative bg-gray-50 p-6 rounded-lg mb-8">
            {/* Injury Rate Y-axis */}
            <div className="absolute left-2 top-1/2 transform -rotate-90 origin-left text-sm font-bold text-red-600">
              INJURY RATE
            </div>
            
            {/* Arrow shape container */}
            <div className="relative ml-8">
              <div className="flex items-stretch h-48">
                {/* Reactive Section */}
                <div className={`relative flex-1 ${level.stage === 1 ? 'ring-4 ring-yellow-400 ring-opacity-80' : ''}`}>
                  <div className="bg-red-600 h-full flex flex-col justify-between p-3 text-white text-xs relative"
                       style={{clipPath: 'polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)'}}>
                    <div className="text-center">
                      <div className="bg-white text-red-600 px-1 py-0.5 rounded text-xs font-bold mb-1 inline-block transform -skew-x-12">
                        NATURAL INSTINCTS
                      </div>
                      <div className="text-sm font-bold mb-1">Reactive</div>
                      <div className="text-xs leading-tight">
                        • People hurt by behaviour<br/>
                        • Safety is a priority<br/>
                        • Focus on injury rates<br/>
                        • Compliance based<br/>
                        • Reactive programs
                      </div>
                    </div>
                    <div className="text-center text-xs italic">
                      "I follow rules because I have to"
                    </div>
                  </div>
                  {level.stage === 1 && (
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-2 py-1 rounded text-xs font-bold">
                      YOUR LEVEL
                    </div>
                  )}
                </div>

                {/* Dependent Section */}
                <div className={`relative flex-1 ${level.stage === 2 ? 'ring-4 ring-yellow-400 ring-opacity-80' : ''}`}>
                  <div className="bg-orange-500 h-full flex flex-col justify-between p-3 text-white text-xs relative"
                       style={{clipPath: 'polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)'}}>
                    <div className="text-center">
                      <div className="bg-white text-orange-500 px-1 py-0.5 rounded text-xs font-bold mb-1 inline-block transform -skew-x-12">
                        SUPERVISION
                      </div>
                      <div className="text-sm font-bold mb-1">Dependent</div>
                      <div className="text-xs leading-tight">
                        • Supervisor engagement<br/>
                        • Rules & procedures<br/>
                        • Training programs<br/>
                        • Behavior modification<br/>
                        • Measurement systems
                      </div>
                    </div>
                    <div className="text-center text-xs italic">
                      "I follow rules because I have to"
                    </div>
                  </div>
                  {level.stage === 2 && (
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-2 py-1 rounded text-xs font-bold">
                      YOUR LEVEL
                    </div>
                  )}
                </div>

                {/* Independent Section */}
                <div className={`relative flex-1 ${level.stage === 3 ? 'ring-4 ring-yellow-400 ring-opacity-80' : ''}`}>
                  <div className="bg-yellow-600 h-full flex flex-col justify-between p-3 text-white text-xs relative"
                       style={{clipPath: 'polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)'}}>
                    <div className="text-center">
                      <div className="bg-white text-yellow-600 px-1 py-0.5 rounded text-xs font-bold mb-1 inline-block transform -skew-x-12">
                        SELF
                      </div>
                      <div className="text-sm font-bold mb-1">Independent</div>
                      <div className="text-xs leading-tight">
                        • Personal responsibility<br/>
                        • Self-directed behavior<br/>
                        • Individual commitment<br/>
                        • Intrinsic motivation<br/>
                        • Personal ownership
                      </div>
                    </div>
                    <div className="text-center text-xs italic">
                      "I follow rules because I want to"
                    </div>
                  </div>
                  {level.stage === 3 && (
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-2 py-1 rounded text-xs font-bold">
                      YOUR LEVEL
                    </div>
                  )}
                </div>

                {/* Interdependent Section */}
                <div className={`relative flex-1 ${level.stage === 4 ? 'ring-4 ring-yellow-400 ring-opacity-80' : ''}`}>
                  <div className="bg-green-600 h-full flex flex-col justify-between p-3 text-white text-xs relative"
                       style={{clipPath: 'polygon(10% 0, 100% 0, 90% 50%, 100% 100%, 10% 100%, 0 50%)'}}>
                    <div className="text-center">
                      <div className="bg-white text-green-600 px-1 py-0.5 rounded text-xs font-bold mb-1 inline-block transform -skew-x-12">
                        TEAMS
                      </div>
                      <div className="text-sm font-bold mb-1">Interdependent</div>
                      <div className="text-xs leading-tight">
                        • Team responsibility<br/>
                        • Care for others<br/>
                        • Collective commitment<br/>
                        • Mutual accountability<br/>
                        • Helping behaviors
                      </div>
                    </div>
                    <div className="text-center text-xs italic">
                      "I follow rules because I want to"
                    </div>
                  </div>
                  {level.stage === 4 && (
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-2 py-1 rounded text-xs font-bold">
                      YOUR LEVEL
                    </div>
                  )}
                </div>
              </div>

              {/* Motivation labels - exactly like original */}
              <div className="flex justify-between mt-4 text-center">
                <div className="w-1/2 text-red-600">
                  <div className="font-bold text-sm">External Motivation</div>
                  <div className="font-semibold text-xs">Compliance</div>
                  <div className="text-xs">Rules, Procedures, Protocols</div>
                </div>
                <div className="w-1/2 text-blue-600">
                  <div className="font-bold text-sm">Internal Motivation</div>
                  <div className="font-semibold text-xs">Commitment</div>
                  <div className="text-xs">Self Leadership, Role Modelling,<br/>Influencing & Engagement</div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="text-center mb-6">
            <div className={`inline-block px-8 py-4 rounded-xl text-white font-bold text-xl ${level.color}`}>
              {level.level} Level
            </div>
            <p className="text-xl mt-3 text-gray-700">Assessment Score: {score.toFixed(1)}%</p>
            <div className="mt-2 text-sm text-gray-600">
              {Object.values(bradleyAnswers).filter(a => a === 'na').length > 0 && (
                <p>* {Object.values(bradleyAnswers).filter(a => a === 'na').length} questions marked as Not Applicable were excluded from scoring</p>
              )}
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
            <h4 className="font-bold text-lg mb-3 text-gray-800">Development Recommendations:</h4>
            {level.stage === 1 && (
              <div>
                <p className="mb-2"><strong>Focus Area:</strong> Building foundational safety systems and management commitment</p>
                <p><strong>Key Actions:</strong> Establish clear safety policies, improve supervisor training, implement basic measurement systems, and ensure regulatory compliance.</p>
              </div>
            )}
            {level.stage === 2 && (
              <div>
                <p className="mb-2"><strong>Focus Area:</strong> Developing systematic safety management and employee engagement</p>
                <p><strong>Key Actions:</strong> Enhance training programs, implement behavior-based safety initiatives, improve safety communications, and strengthen supervisor-employee relationships.</p>
              </div>
            )}
            {level.stage === 3 && (
              <div>
                <p className="mb-2"><strong>Focus Area:</strong> Fostering personal responsibility and self-directed safety behaviors</p>
                <p><strong>Key Actions:</strong> Develop safety leadership skills, encourage employee ownership, implement self-assessments, and promote intrinsic motivation for safety.</p>
              </div>
            )}
            {level.stage === 4 && (
              <div>
                <p className="mb-2"><strong>Focus Area:</strong> Maintaining excellence through team collaboration and continuous improvement</p>
                <p><strong>Key Actions:</strong> Foster peer-to-peer safety coaching, implement team-based safety initiatives, share best practices, and drive innovation in safety practices.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderHeartsResults = () => {
    const scores = calculateHeartsScore();
    const dominantLevel = getHeartsLevel();
    
    return (
      <div className="space-y-6">
        <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">Hearts and Minds Safety Culture</h3>
        
        <div className="bg-black p-8 rounded-xl shadow-xl text-white relative overflow-hidden">
          {/* Background diagonal lines like original */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <line x1="0" y1="100" x2="20" y2="0" stroke="white" strokeWidth="0.5"/>
              <line x1="10" y1="100" x2="30" y2="0" stroke="white" strokeWidth="0.5"/>
              <line x1="20" y1="100" x2="40" y2="0" stroke="white" strokeWidth="0.5"/>
              <line x1="30" y1="100" x2="50" y2="0" stroke="white" strokeWidth="0.5"/>
              <line x1="40" y1="100" x2="60" y2="0" stroke="white" strokeWidth="0.5"/>
            </svg>
          </div>

          {/* Main diagonal arrow like original */}
          <div className="absolute left-12 top-8 bottom-8 w-0.5 bg-white transform rotate-12 origin-bottom opacity-30"></div>
          
          {/* Consciousness and Responsibility arrows */}
          <div className="absolute left-8 top-12 text-xs text-gray-300 transform -rotate-45 origin-center">
            <div className="whitespace-nowrap">
              <div>Aumento da</div>
              <div>consciência</div>
            </div>
          </div>
          <div className="absolute right-8 bottom-12 text-xs text-gray-300 transform rotate-45 origin-center">
            <div className="whitespace-nowrap">
              <div>Aumento da</div>
              <div>confiança e</div>
              <div>responsabilidade</div>
            </div>
          </div>

          {/* Culture levels - exactly like original with highlighting */}
          <div className="relative z-10 space-y-3 pt-4 pb-4">
            {/* Generativo */}
            <div className={`relative ${dominantLevel === 'generative' ? 'ring-4 ring-yellow-400' : ''}`}>
              <div className="bg-green-600 p-4 rounded-lg relative">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white">GENERATIVO</h4>
                    <p className="text-sm text-green-100 italic">SMS é como fazemos negócios aqui</p>
                    <p className="text-xs text-green-100 mt-1">A gestão da segurança e saúde é uma parte integral de tudo que fazemos</p>
                  </div>
                  <div className="text-3xl font-bold text-white ml-4">{scores.generative}</div>
                </div>
                {dominantLevel === 'generative' && (
                  <div className="absolute -right-12 top-1/2 transform -translate-y-1/2">
                    <div className="bg-yellow-400 text-black px-3 py-1 rounded-r-lg text-sm font-bold whitespace-nowrap">
                      SUA CULTURA
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Proativo */}
            <div className={`relative ${dominantLevel === 'proactive' ? 'ring-4 ring-yellow-400' : ''}`}>
              <div className="bg-yellow-500 p-4 rounded-lg relative">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-black">PROATIVO</h4>
                    <p className="text-sm text-yellow-800 italic">A melhoria é valores conduzida</p>
                    <p className="text-xs text-yellow-800 mt-1">Tentamos antecipar os problemas que iremos enfrentar</p>
                  </div>
                  <div className="text-3xl font-bold text-black ml-4">{scores.proactive}</div>
                </div>
                {dominantLevel === 'proactive' && (
                  <div className="absolute -right-12 top-1/2 transform -translate-y-1/2">
                    <div className="bg-yellow-400 text-black px-3 py-1 rounded-r-lg text-sm font-bold whitespace-nowrap">
                      SUA CULTURA
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Calculativo */}
            <div className={`relative ${dominantLevel === 'calculative' ? 'ring-4 ring-yellow-400' : ''}`}>
              <div className="bg-orange-500