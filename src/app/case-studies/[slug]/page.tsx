import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyDetail from "@/components/case-studies/CaseStudyDetail";
import { caseStudies, getCaseStudy } from "@/data/caseStudies";

type CaseStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    return {};
  }

  return {
    title: `${caseStudy.shortClient}: ${caseStudy.title} | NF Media Lab`,
    description: caseStudy.heroIntro,
    alternates: {
      canonical: `/case-studies/${caseStudy.slug}`,
    },
    openGraph: {
      title: `${caseStudy.shortClient}: ${caseStudy.title}`,
      description: caseStudy.heroIntro,
      url: `/case-studies/${caseStudy.slug}`,
      images: [
        {
          url: caseStudy.image,
          width: 1200,
          height: 1600,
          alt: `Case study ${caseStudy.client}`,
        },
      ],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyDetail caseStudy={caseStudy} />;
}
