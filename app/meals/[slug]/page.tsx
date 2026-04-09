interface MealsSlugProps {
  params: Promise<{ slug: string }>;
}

const MealsSlug = async ({ params }: MealsSlugProps) => {
  const { slug } = await params;
  return (
    <>
      <h1>{slug} Meals Page!</h1>
    </>
  );
};

export default MealsSlug;
