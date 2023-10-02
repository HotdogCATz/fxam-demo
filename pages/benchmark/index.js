import ButtonC from '../../components/ButtonC'

export default function Home() {
    return(<>
        <div class="mt-5">
            <ButtonC buttonText="reaction time" href="/benchmark/reactiontime" />
        </div>
        <div class="mt-5">
            <ButtonC buttonText="sequence memory" href="/benchmark/sequencememory" />
        </div>
        <div class="mt-5">
            <ButtonC buttonText="number memory" href="/benchmark/numbermemory" />
        </div>
    </>)
};