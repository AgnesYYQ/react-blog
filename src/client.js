import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: "6gdvu43m",
    dataset: "production",
    useCdn: true
})