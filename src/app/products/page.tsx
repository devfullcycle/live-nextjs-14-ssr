import { Suspense } from "react";
import { ProductList } from "../../components/ProductList";
import { makeSearchLink } from "../../utils";
import { Loading } from "../../components/Loading";
import { ClientComponent } from "../../components/ClientComponent";

async function ProductsListPage({
  searchParams,
}: {
  searchParams: { name?: string; page?: string };
}) {
  const { name } = searchParams;
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  return (
    <div className="m-2">
      <form action={makeSearchLink({ page: 1 })} method="get">
        <input
          className="text-black"
          type="search"
          placeholder="Pesquisar..."
          name="name"
          defaultValue={name}
        />
        <button type="submit">Pesquisar</button>
      </form>
      <div className="container mt-8">
        <h1 className="text-2xl font-bold">Lista de produtos</h1>
        <Suspense fallback={<Loading />}>
          <ProductList name={name} page={page} />
        </Suspense>
        <ClientComponent />
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.products.map((product, key) => (
            <div className="bg-white p-4 rounded shadow" key={key}>
              <Image
                src={product.image_url}
                alt={product.name}
                width={150}
                height={150}
              />
              <h2 className="text-lg text-black font-semibold">
                {product.name}
              </h2>
              <div className="text-blue-600 font-bold">
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(product.price)}
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default ProductsListPage;
