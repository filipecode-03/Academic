export function ThemeSwitcher() {
    return (
        <div className="flex items-center gap-2">
            <span className="text-sm font-bold">
                THEME
            </span>

            <div className="flex gap-1">
                <button
                    type="button"
                    className="h-5 w-5 rounded-full"
                />

                <button
                    type="button"
                    className="h-5 w-5 rounded-full"
                />

                <button
                    type="button"
                    className="h-5 w-5 rounded-full"
                />
            </div>
        </div>
    );
}