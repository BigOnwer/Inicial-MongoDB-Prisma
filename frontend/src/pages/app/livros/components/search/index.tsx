import { MagnifyingGlass } from "phosphor-react";
import { Content, InputSearch } from "./style";
import { useContext } from "react";
import { UserContext } from "../../../../../context/BooksContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const searchFormSchema = z.object({
    query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function Search() {
    const {fetchList} = useContext(UserContext)

    const {
        register,
        handleSubmit,
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    })

    async function handleSearchPosts(data: SearchFormInputs) {
        await fetchList(data.query)
    }

    return(
        <form onSubmit={handleSubmit(handleSearchPosts)}>
            <Content>
                <button type="submit"><MagnifyingGlass size={26} /></button>
                <InputSearch type="text" autoComplete="on" {...register('query')}/>
            </Content>
        </form>
    )
}