import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../ui/Container';
import Card from '../../ui/Card';
import { ArrowLeft, Globe, Cpu, Layers, CheckCircle2 } from 'lucide-react';

const UseCaseDetail = ({ data }) => {
    if (!data) return null;

    return (
        <div className="bg-background-main min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-background-section to-background-main py-16 lg:py-24">
                {/* Background Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
                    <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[80%] bg-brand-primary/20 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[80%] bg-brand-secondary/30 rounded-full blur-[120px]"></div>
                </div>

                <Container className="relative z-10">
                    {/* Back Link */}
                    <Link
                        to="/use-cases"
                        className="inline-flex items-center gap-2 text-text-secondary hover:text-brand-primary transition-colors duration-300 mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                        <span className="text-sm font-medium">Back to Use Cases</span>
                    </Link>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-3 mb-6">
                        {data.platform && (
                            <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-text-secondary bg-white px-3 py-1.5 rounded-full shadow-sm border border-black/5">
                                <Globe className="w-3 h-3" />
                                {data.platform}
                            </span>
                        )}
                        {data.industry && (
                            <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-brand-primary bg-brand-primary/10 px-3 py-1.5 rounded-full">
                                <Cpu className="w-3 h-3" />
                                {data.industry}
                            </span>
                        )}
                    </div>

                    {/* Project Name */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary mb-6 tracking-tight leading-[1.1]">
                        {data.name}
                    </h1>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {data.technologies.map((tech, idx) => (
                            <span
                                key={idx}
                                className="text-[11px] whitespace-nowrap font-bold text-text-tertiary bg-white/80 px-3 py-1.5 rounded-lg border border-border-subtle/40"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Project Overview */}
            <section className="py-16 lg:py-20">
                <Container>
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary">
                                <Layers className="w-5 h-5" strokeWidth={2} />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-text-primary">Project Overview</h2>
                        </div>
                        <p className="text-lg text-text-secondary leading-relaxed font-medium">
                            {data.overview}
                        </p>
                    </div>
                </Container>
            </section>

            {/* Challenge Section (if provided) */}
            {data.challenge && (
                <section className="py-16 lg:py-20 bg-background-section">
                    <Container>
                        <div className="max-w-4xl">
                            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-6">The Challenge</h2>
                            <p className="text-lg text-text-secondary leading-relaxed font-medium">
                                {data.challenge}
                            </p>
                        </div>
                    </Container>
                </section>
            )}

            {/* Solution Section */}
            <section className={`py-16 lg:py-20 ${data.challenge ? '' : 'bg-background-section'}`}>
                <Container>
                    <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-10">Our Solution</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {data.solution.map((item, index) => (
                            <Card
                                key={index}
                                className="group flex flex-col"
                                hoverEffect={true}
                            >
                                {/* Solution Number */}
                                <div className="mb-4">
                                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary font-bold text-sm group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-brand-primary transition-colors duration-300">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-base text-text-secondary leading-relaxed">
                                    {item.description}
                                </p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Key Features */}
            <section className={`py-16 lg:py-20 ${data.challenge ? 'bg-background-section' : ''}`}>
                <Container>
                    <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-10">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.keyFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-border-subtle/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                            >
                                <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" strokeWidth={2} />
                                <span className="text-base font-medium text-text-primary leading-snug">{feature}</span>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-16 lg:py-20">
                <Container>
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                            Interested in a Similar Solution?
                        </h2>
                        <p className="text-lg text-text-secondary mb-8">
                            Let's discuss how we can build something exceptional for your business.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-full font-bold hover:bg-brand-primary/90 transition-all duration-300 shadow-lg hover:-translate-y-0.5"
                            >
                                Start a Conversation
                            </Link>
                            <Link
                                to="/use-cases"
                                className="inline-flex items-center justify-center gap-2 bg-white text-text-primary px-8 py-4 rounded-full font-bold border border-border-subtle hover:border-brand-primary hover:text-brand-primary transition-all duration-300"
                            >
                                View More Use Cases
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default UseCaseDetail;
