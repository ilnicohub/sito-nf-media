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
    title: {
      absolute: `NF Media Lab | ${caseStudy.shortClient}: ${caseStudy.title}`,
    },
    description: caseStudy.heroIntro,
    keywords: [
      caseStudy.client,
      caseStudy.shortClient,
      "case study",
      "progetto digitale",
      ...(caseStudy.services ?? []),
    ],
    alternates: {
      canonical: `/case-studies/${caseStudy.slug}`,
    },
    openGraph: {
      title: `NF Media Lab | ${caseStudy.shortClient}: ${caseStudy.title}`,
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
