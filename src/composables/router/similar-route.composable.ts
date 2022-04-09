import similarity from "@/utils/similarity";
import { useRouter, useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import { RouteName } from "@/common";

const useSimilarRoute = function () {
  const router = useRouter();
  const route = useRoute();
  const similarRoute = ref("");

  onMounted(() => {
    const similarityScore = new Map<RouteName, number>();

    for (const routeNameId in RouteName) {
      const routeName = RouteName[routeNameId as keyof typeof RouteName];
      const resolvedRoute = router.resolve({ name: routeName });

      similarityScore.set(
        routeName,
        similarity(resolvedRoute.fullPath, route.fullPath)
      );
    }

    const similarityScoreOrdered = new Map(
      [...similarityScore.entries()].sort((a, b) => b[1] - a[1])
    );

    const mostSimilar = similarityScoreOrdered.entries().next();

    console.log(similarityScoreOrdered);

    similarRoute.value = router.resolve({
      name: mostSimilar.value[0],
    }).fullPath;
  });

  return similarRoute;
};

export default useSimilarRoute;
