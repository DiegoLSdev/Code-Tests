export default function EmptyState() {
    return (
        <div className="container mx-auto px-4 py-12 text-center">
            <h2 className="text-2xl font-semibold mb-4">Challenge Not Found</h2>
            <p className="text-sm text-gray-600">
                The challenge you are looking for does not exist. Please check the URL or return to the home page.
            </p>
        </div>
    );
}